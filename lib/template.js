var sanitizeHtml=require('sanitize-html');
module.exports={
  HTML:function(title,list,body,control){
    return `
    <!doctype html>
    <html>
    <head>
      <title>${title}</title>
      <meta charset="utf-8">
    </head>
    <body>
      <h1><a href="/" title="홈페이지"><font color="white">홈페이지</font></a></h1>
      <div id="grid">
        <ol>
          <p><a href="/author">author</a></p>
          ${list}
          ${control}
        </ol>
          ${body}
        </div>
      </body>
      </html>
      `;
  },list:function (topics){
    var list=`<h3><목록></h3>`;
    var i=0;
    while(i<topics.length){
      list=list+`<li><a href="/?id=${topics[i].id}">${sanitizeHtml(topics[i].title)}</a></li>`
      i=i+1;
    }
    return list;
  },authorSelect:function(authors,author_id){
    var tag='';
    var i=0;
    while(i<authors.length){
      var selected='';
      if(authors[i].id===author_id){
        selected='selected';
      }
      tag=tag+`<option value="${authors[i].id}"${selected}>${sanitizeHtml(authors[i].name)}</option> `
      i++;      
    };
  return `<select name="author">
  ${tag}
</select>`
  },authorTable:function(authors){
    var tag='<table>';
            var i=0;
            while(i<authors.length){
                tag+=`
                <tr>
                    <td>${sanitizeHtml(authors[i].name)}</td>
                    <td>${sanitizeHtml(authors[i].profile)}</td>
                    <td><a href="/author/update?id=${authors[i].id}">update</a></td>
                    <td>
                      <form action="/author/delete_process" method="post">
                        <input type="hidden" name="id" value="${authors[i].id}">
                        <input type="submit" value="delete">
                      </form>
                    </td>
                </tr>
                `;
                i++;
            }
            tag+='</table>'
  return tag;
  }
}
