import apiUrl from '../apiConfig'
import axios from 'axios'



// CREATE
export const createComment = (user, coinId, newComment) => {
	console.log('the user in createComment', user)
    console.log('the newComment in createComment', newComment)
	return axios({
		url: `${apiUrl}/comments/${coinId}`,
		method: 'POST',
		data: { comment: newComment },
		headers: {
			Authorization: `Token token=${user.token}`,
		},
	})
}

// UPDATE comment
export const updateComment = (user, updatedComment) => {
	return axios({
		url: `${apiUrl}/comments/${updatedComment._id}`,
		method: 'PATCH',
		headers: {
			Authorization: `Token token=${user.token}`,
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
			Authorization: `Token token=${user.token}`,
		}
	})
}