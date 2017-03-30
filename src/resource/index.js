import api from 'create-api'

export function getNotes () {
  return api.get('notes').then(notes => {
    return notes
  })
}

