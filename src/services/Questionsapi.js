import supabase from "./supabase"
export default async function getQuestions (){
    
let { data: questions, error } = await supabase
  .from('questions')
  .select('*')
  console.log(questions)
if(error) {
    throw new Error("questions could not be loaded")
}
return questions;
}
