import apiUrl from '../apiConfig'
import axios from 'axios'

export const getComment = (user, coinId) => {
	console.log('index comment')
	return axios({
		url: `${apiUrl}/comments/${coinId}`,
		method: 'GET',
		headers: {
			Authorization: `Token token=${user.user.token}`,
		},
	})
}

// CREATE
export const createComment = (user, coinId, newComment) => {
	console.log('the user in createComment', user.user.token)
    console.log('the newComment in createComment', newComment)
	return axios({
		url: `${apiUrl}/comments/${coinId}`,
		method: 'POST',
		data: { comment: newComment },
		headers: {
			Authorization: `Token token=${user.user.token}`,
		},
	})
}

// UPDATE comment
export const updateComment = (user, updatedComment) => {
	return axios({
		url: `${apiUrl}/comments/${updatedComment._id}`,
		method: 'PATCH',
		headers: {
			Authorization: `Token token=${user.user.token}`,
		},
		data: { comment: updatedComment }
	})
}

// DELETE comment
export const deleteComment = (user, commentId) => {
	return axios({
		url: `${apiUrl}/comments/${commentId}`,
		method: 'DELETE',
		headers: {
			Authorization: `Token token=${user.user.token}`,
		}
	})
}