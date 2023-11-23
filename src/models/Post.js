class Post {
  constructor(data, foto, horario, id, texto, user) {
    this.id = id;
    this.data = data;
    this.foto = foto;
    this.horario = horario;
    this.texto = texto;
    this.user = user;
  }
}

module.exports = Post;
