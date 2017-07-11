function academicoDAO(connection){
	this._connection=connection;
}
academicoDAO.prototype.getNoticias=function ( callback){
	this._connection.query('select * from noticias order by data_criacao desc',callback);
}



academicoDAO.prototype.getNoticiasPNome=function (nome,callback){
	let busca='select *, (SELECT COUNT(noticia)from noticias where autor= "'+nome.autor+'")AS C FROM noticias WHERE autor="'+nome.autor+'"ORDER by data_criacao desc';
	this._connection.query(busca,callback);
}
academicoDAO.prototype.getNoticiasPAssunto=function (nome,callback){
	let busca='select *, (SELECT COUNT(noticia)from noticias where assunto= "'+nome.assunto+'")AS C FROM noticias WHERE assunto="'+nome.assunto+'"ORDER by data_criacao desc';
	this._connection.query(busca,callback);
}
academicoDAO.prototype.getNoticiasPData=function (nome,callback){
	let busca='select *, (SELECT COUNT(noticia)from noticias where data_noticia= "'+nome.data_noticia+'")AS C FROM noticias WHERE data_noticia="'+nome.data_noticia+'"ORDER by data_criacao desc';
	this._connection.query(busca,callback);
}
academicoDAO.prototype.getNoticiasPNomePData=function (nome,callback){
	let busca = 'select * from noticias where data_noticia= "'+nome.data_noticia+'"  && autor = "'+nome.autor+'"  order by data_criacao desc';
	this._connection.query(busca,callback);
}
academicoDAO.prototype.getNoticiasPNomePAssunto=function (nome,callback){
	let busca = 'select * from noticias where assunto= "'+nome.assunto+'"  && autor = "'+nome.autor+'"  order by data_criacao desc';
	this._connection.query(busca,callback);
}
academicoDAO.prototype.getNoticiasPDataPAssunto=function (nome,callback){
	let busca = 'select * from noticias where data_noticia= "'+nome.data_noticia+'"  && assunto = "'+nome.assunto+'"  order by data_criacao desc';
	this._connection.query(busca,callback);
}
academicoDAO.prototype.getNoticiasPNomePDataPAssunto=function (nome,callback){
	let busca = 'select * from noticias where data_noticia= "'+nome.data_noticia+'"  && assunto = "'+nome.assunto+'" && assunto = "'+nome.assunto+'"  order by data_criacao desc';
	this._connection.query(busca,callback);
}
academicoDAO.prototype.getCountPNome=function (nome,callback){
	let busca = 'SELECT COUNT(noticia) AS C FROM noticias WHERE autor="'+nome.autor+'"';
	this._connection.query(busca,callback);
}






academicoDAO.prototype.getDepartamento=function (callback){
	this._connection.query('select * FROM departamento ORDER by Nome ASC',callback);
}

academicoDAO.prototype.getCurso=function (callback){
	this._connection.query('select * FROM curso ORDER by Nome ASC',callback);
}

academicoDAO.prototype.salvarNoticia=function (noticia, callback){
	this._connection.query('insert into noticias set ? ', noticia, callback);
}

academicoDAO.prototype.salvarAdm=function (pessoa, callback){
	this._connection.query('insert into administrador set ?',pessoa, callback);
}

academicoDAO.prototype.salvarAluno=function (pessoa, callback){
	this._connection.query('insert into aluno set ?',pessoa, callback);
}

academicoDAO.prototype.salvarProfessor=function (pessoa, callback){
	this._connection.query('insert into professor set ?',pessoa, callback);
}

academicoDAO.prototype.salvarSecretaria=function (pessoa, callback){
	this._connection.query('insert into secretaria set ?',pessoa, callback);
}



academicoDAO.prototype.salvarCurso=function (curso,callback){
	this._connection.query('insert into curso set ? ', curso, callback);
}



academicoDAO.prototype.salvarDepartamento=function (departamento,callback){
	this._connection.query('insert into departamento set ? ', departamento, callback);
}









academicoDAO.prototype.deletarNoticia=function (noticia, callback){
	let deleta='DELETE FROM noticias WHERE id='+noticia.id_noticia+'';
	this._connection.query(deleta, callback);
}

academicoDAO.prototype.updateNoticia=function (noticia, id,callback){
	let update='UPDATE noticias SET titulo = "'+noticia.titulo+'",noticia="'+noticia.noticia+'",resumo="'+noticia.resumo+'",autor="'+noticia.autor+'",data_noticia="'+noticia.data_noticia+'",assunto="'+noticia.assunto+'" WHERE id = '+id.id_noticia+'';
	//console.log(id.id_noticia);
	//console.log(noticia);
	this._connection.query(update, callback);
}


academicoDAO.prototype.get5UltimasNoticias=function ( callback){
	this._connection.query('select * from noticias order by data_criacao desc limit 5 ', callback);
}

module.exports=function(){

	
	return academicoDAO;
}