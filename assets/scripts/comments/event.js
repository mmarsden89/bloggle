const getFormFields = require('./../../../lib/get-form-fields.js')
const api = require('./api')
const ui = require('./ui')

const onGetComments = function (event) {
  event.preventDefault()
  const currentBlog = $(event.target).data('blog')
  api.getComments()
    .then(ui.getCommentSuccess)
  //  .then(ui.showComments(event))
    .catch(ui.getCommentFailure)
}

const onNewComment = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.createComment(data)
    .then(ui.onCreateCommentSuccess)
    .catch(ui.onCreateCommentFailure)
}

const onUpdateComment = function (event) {
  event.preventDefault()
  const id = $(event.target).data('comment')
  const data = getFormFields(event.target)
  api.updateComment(data, id)
    .then(ui.onUpdateCommentSuccess)
    .catch(ui.onUpdateCommentFailure)
}

const onDestroyComment = function (event) {
  event.preventDefault()
  const id = $(event.target).data('comment')
  api.destroyComment(id)
    .then(ui.onDestroyCommentSuccess)
    .catch(ui.onDestroyCommentFailure)
}

const addHandlers = function (event) {
  $('.content').on('click', '.commentHeight', onGetComments)
  $('#place').on('submit', onNewComment)
  $('#place').on('submit', onUpdateComment)
  $('#place').on('submit', onDestroyComment)
}

module.exports = {
  addHandlers
}