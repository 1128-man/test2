
document.write("<script language=javascript src='jquery.js'></script>")
//新增学生行为
var addstudent=document.getElementById("add");
addstudent.onclick=function(e){
  e.preventDefault(e);//阻止默认行为
  var form=document.getElementById("addStu")
  var formData=getFormdata(form)
  var status=formData.status
  if(status=="success"){
var data=Object.assign({
  appkey:"1120768996_1606828836694"
},formData.data);
var dataStr="";
for(var prop in data){
  if(data.hasOwnProperty(prop)){
    dataStr+=prop+'='+data[prop]+'&';
  }
}
  }
$.ajax("get","http://101.200.149.141:8849/api/student/:id",dataStr,function(res){
  console.log(res);
  if(res.status=="success"){
    alert('添加成功')
   var Studentlist=Document.querySelector('.contet table[data-id:"student-list"]')
   Studentlist.click();
  }else{

  alert(res.msg);
  }
  },true);

//获取表单数据
function getFormdata(form){
  var id=form.id.value;
  var name=form.name.value
  var sex=form.sex.value
  var age=form.age.value
  var birth=form.birth.value
  var classid=form.classid.value


 // 信息校验
 if(!id||!name||!sex||!age||!birth||!classid){
   return{
     status:"fail",
     msg:"信息填写不完整，请校验后提交"
   }
 }
 var idReg=/[^\d]/g
if(!idReg.test(idReg)){
  return{
    status:"fail",
    msg:"id填写错误"
  }
}

 var sexReg=/^[01]$/;
 if(!sexReg.test(sex)){
   return {
    status:"fail",
     msg:"性别只能选择male或female"
   }
 }
 var birthReg=/^d{13}$/

if(age<5||age>100){
  return{
    status :"fail",
    msg:"age填写错误"
  }
}
// var birthReg=/^d{1,13}$/
//  if(!birthReg.test(birth)){
//   return{
//     status:"fail",
//     msg:"birthday填写错误"
//   }
//  }
 return{
    status:200,
   msg:"success",
  data:{
    id,
    name,
    sex,
    age,
    birth,
    classid
  }
 }


};



// function getStudentlist(){
//   var dataStr=""
//     $.ajax("get",
//       "http://101.200.149.141:8849/api/student",dataStr)
       
        
}
//获取学生信息
