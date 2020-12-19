var ck=require('chalk');
var readLine=require('readline-sync')
console.log(ck.bold.cyan('How much do you know about Kushal?\n'))
var usrname,userans,score=0,topscore=0;
usrname=readLine.question(ck.white.bold('Enter your name :'))
var questions =[{
  question:'1. do you know kushal ?',
  answer:'yes'
},{
  question:'2. Do Kushal love to play video Games ?',
  answer:'yes'
}
,{
  question:'3. is he is inside Neog.camp? ',
  answer:'yes'
},{
  question:'4. where Kushal lives',
  answer:'Rajkot'
},{
  question:'5. What is the favorite sports of Kushal?',
  answer:'football'
},{
  question:'6. is kushal is calm and cool ?',
  answer:'yes'
}];
for(i=0;i<=questions.length-1;i++){
console.log(ck.red(questions[i].question))
userans=readLine.question(ck.green('type any option :'))
if(questions[i].answer===userans)
{
  console.log('right ! your answer is ' +userans)
  score++;
}
  else{
  console.log('wrong answer** \n answer is '+questions[i].answer)
  
}}
console.log(ck.yellow(usrname+' your score is '+score))
if(score>topscore){
  topscore=score
  };
console.log('top score is '+topscore)
