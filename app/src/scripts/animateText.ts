export const animateText = (text: string, id: string, interval: number) => {
  let temp: string = '';
  const typedText = setInterval(() => {
    if(text.length !== 0){
      temp += text.charAt(0);
      text = text.replace(text.charAt(0), '');
      Type(temp, id);
    }else{
      clearInterval(typedText);
    }
  }, interval)
  return `${''}`;
}

function Type(text: string, id: string) {
  if(!(typeof window === undefined)){
    try{
    let head = document.getElementById(id);
    if(head) head.textContent = text; 
    } catch(err){
      return null;
    }
  }
}