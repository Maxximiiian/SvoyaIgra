require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const path = require('path');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
const bcrypt = require('bcrypt');
const {
  User, Question, Category,
} = require('./db/models');

const app = express();

app.use(cors({
  credentials: true,
  origin: true,
}));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('dev'));
app.use(express.static(path.join(process.env.PWD, 'public')));

const sessionConfig = {
  name: 'mega-cookie',
  secret: process.env.SECRET || 'thisisnotsecure',
  store: new FileStore(),
  cookie: {
    secure: false,
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 24,
  },
  resave: true,
  saveUninitialized: false,
};

app.use(session(sessionConfig));

app.get('/auth', async (req, res) => {
  setTimeout(async () => {
    try {
      const result = await User.findByPk(req.session.userId);
      res.json(result);
    } catch (error) {
      res.json(error);
    }
  }, 1000);
});

app.post('/registration', async (req, res) => {
  const { email, name, password } = req.body;
  try {
    const currUser = await User.findOne({ where: { email } });
    if (!currUser) {
      const hashPassword = await bcrypt.hash(password, 10);
      const newUser = await User.create({ email, name, password: hashPassword });
      req.session.userId = newUser.id;
      req.session.name = newUser.name;
      return res.json({ userId: newUser.id, name: newUser.name });
    }
    res.status(400).json({ message: 'That name already exists' });
  } catch (err) {
    console.error(err);
  }
});

app.post('/auth', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });
    if (user) {
      const compare = await bcrypt.compare(password, user.password);
      if (compare) {
        req.session.userName = user.name;
        req.session.userId = user.id;
        return res.json(user);
      }
    } else {
      res.status(400).json({ message: 'something went wrong' });
    }
  } catch (error) {
    return res.json(error);
  }
});

app.get('/logout', async (req, res) => {
  try {
    req.session.destroy();
    res.clearCookie('mega-cookie');
    res.sendStatus(200);
  } catch (error) {
    res.json(error);
  }
});

// app.post('/todo', async (req, res) => {
//   setTimeout(async () => {
//     try {
//       const { body } = req.body;
//       const { userId } = req.session;
//       const newTodo = await Todo.create({ body, isDone: false, userId });
//       if (newTodo) {
//         res.json(newTodo);
//       } else {
//         res.status(400);
//       }
//     } catch (error) {
//       res.json(error);
//     }
//   }, 1000);
// });

app.get('/questions', async (req, res) => {
  try {
    const allQuestion = await Question.findAll();
    const category = await Category.findAll();
    console.log('category ====>', category);
    console.log('question ====>', allQuestion);
    console.log(JSON.parse(JSON.stringify({ allQuestion, category })));
    res.json(allQuestion, category);
  } catch (error) {
    res.json(error);
  }
});

// app.delete('/todo', async (req, res) => {
//   setTimeout(async () => {
//     try {
//       const { id } = req.body;
//       const deletedTodo = await Todo.destroy({ where: { id } });
//       if (deletedTodo) {
//         res.json(id);
//       } else { res.status(400); }
//     } catch (error) {
//       res.json(error);
//     }
//   }, 2000);
// });

// app.get('/posts', async (req, res) => {
//   const { userid } = req.query;

//   const result = await Posts.findAll({ where: !+userid ? {} : { user_id: +userid }, limit: 100 });

//   res.json(result);
// });

// app.get('/posts/:postId', async (req, res) => {
//   const { postId } = req.params;
//   const result = await Posts.findOne({ where: { id: postId } });
//   res.json(result);
// });

// app.post('/posts', async (req, res) => {
//   const { title, body } = req.body;
//   const { userId } = req.session;

//   console.log(req.session);

//   const result = await Posts.create({ title, body, user_id: userId });
//   res.json(result);
// });

// app.delete('/posts/:id', async (req, res) => {
//   const { id } = req.params;
//   await Posts.destroy({ where: { id } });
//   res.sendStatus(200);
// });

// app.post('/login', async (req, res) => {
//   try {
//     const { email, password } = req.body;
//     const result = await Users.findOne({ where: { email } });
//     if (await bcrypt.compare(password, result.password)) {
//       req.session.userName = result.name;
//       req.session.userId = result.id;
//       return res.json(result);
//     }
//     throw Error(result);
//   } catch (error) {
//     return res.json(error);
//   }
// });

// app.get('/users', async (req, res) => {
//   const users = await Users.findAll();
//   res.json(users);
// });

app.listen(process.env.PORT, () => {
  console.log('server start ', process.env.PORT);
});
