function CardComp({renderContent,title,content}) {
    console.log(renderContent)
  return (
    renderContent(title, content)
  );
}

export default CardComp;