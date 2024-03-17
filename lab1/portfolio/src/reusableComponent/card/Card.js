function CardComp({renderContent,title,content,index}) {
    console.log(renderContent)
  return (
    renderContent(title, content,index)
  );
}

export default CardComp;