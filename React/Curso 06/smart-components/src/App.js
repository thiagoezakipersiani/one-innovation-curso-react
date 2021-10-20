import React from "react";
import {Gallery} from "./components";

function App() {

  const photos=[
    'https://www.wilkercosta.net/wp-content/uploads/2018/08/imagens-para-blog-02.jpg',
    'https://www.projetoweb.com.br/template/images/divulgue-seu-site-redes-sociais.png',
    'https://rockcontent.com/br/wp-content/uploads/sites/2/2020/03/criar-site-gr%C3%A1tis-1024x597.jpg.webp',
    'https://www.kbrtec.com.br/blog/wp-content/uploads/2019/09/cria%C3%A7%C3%A3o-de-site-1.png',
  ]
  return (
    <>
      <h1>Galeria de fotos</h1>
      <Gallery photos={photos}/>
    </>
  )
}

export default App;
