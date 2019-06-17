const store = require('./../store.js')

store.currentUpdate = null

const getCommentFailure = function (data) {
  $('#user-div').fadeIn(50)
  $('#user-div').html('Something went wrong, please try again!')
  $('#user-div').fadeOut(500)
}

const getCommentSuccess = function (data) {
  store.comments = data.comments
}

const onCreateCommentSuccess = function (data) {
  console.log('comment data is ', data)
  $('form').trigger('reset')
  $('#user-div').html('Your comment has been added!')
  $('#user-div').fadeOut(500)
}

const onCreateCommentFailure = function () {
  $('#user-div').fadeIn(500)
  $('#user-div').html('Something went wrong, please try again!')
  $('#user-div').fadeOut(500)
}

const onUpdateCommentSuccess = function (data) {
  $('form').trigger('reset')
  $('#user-div').fadeIn(500)
  $('#user-div').html('You successfully changed your comment!')
  $('#user-div').fadeOut(500)
}

const onUpdateCommentFailure = function (data) {
  $('#user-div').fadeIn(500)
  $('#user-div').html('Something went wrong, please try again!')
  $('#user-div').fadeOut(500)
}

const onDestroyCommentSuccess = function (data) {
  $('#user-div').fadeIn(500)
  $('#user-div').html('Comment deleted!!')
  $('#user-div').fadeOut(500)
}

const onDestroyCommentFailure = function (data) {
  $('#user-div').fadeIn(500)
  $('#user-div').html('Something went wrong, please try again!')
  $('#user-div').fadeOut(500)
}

module.exports = {
  getCommentSuccess,
  getCommentFailure,
  onCreateCommentSuccess,
  onCreateCommentFailure,
  onUpdateCommentSuccess,
  onUpdateCommentFailure,
  onDestroyCommentSuccess,
  onDestroyCommentFailure
}
