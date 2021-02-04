const express = require('express');

const router = new express.Router();

router.get('/', async (req, res, next) => {
  const result = await res.locals.db.user.findAll({
    include: [res.locals.db.book],
    limit: req.query.limit || 10,
  });
  res.send(result);
});

router.get('/:id', async (req, res, next) => {
  const result = await res.locals.db.user.findByPk(req.params.id, {
    include: [res.locals.db.book],
  });
  if (!result) {
    res.send(404);
    return;
  }
  res.send(result);
});

router.post('/', async (req, res, next) => {
  const result = await res.locals.db.user.create({
    username: req.body.username,
    password: req.body.password,
  });
  res.send(result);
});

router.delete('/:id', async (req, res, next) => {
  try {
    await res.locals.db.user.destroy({
      where: { id: req.params.id },
    });
    res.status(200).json({
      id: req.params.id,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});

module.exports = router;
