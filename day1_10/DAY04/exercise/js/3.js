//找到用户表单和密码表单
var form=document.forms[0];
var txtName=form.username;
var txtPwd=form.pwd;
//并为它们分别绑定事件
txtName.onfocus=getFocus;
txtPwd.onfocus=getFocus;
function getFocus(){
	 //this->当前文本框
  //当前文本框边框加粗
  this.className="txt_focus";
  //清除旁边div的class
  var div=this.parentNode
      .nextElementSibling
      .firstElementChild;
  div.className="";
}
//失去焦点时验证
//姓名验证
txtName.onblur=function(){
	vali(this,/^\w{1,10}$/);
}
//封装一个验证函数vail
function vali(txt,reg){
	txt.className='';//清空当前文本框的class
	//获取旁边div
	var div=txt.parentNode
	.nextElementSibling
	.firstElementChild;
	//用reg测试当前文本框的内容
  //如果通过,就修改div的class为vali_success
  if(reg.test(txt.value)){
    div.className="vali_success";
    return true;
  }else{//否则修改div的class为vali_fail
    div.className="vali_fail";
    return false;
  }
}
//密码验证
txtPwd.onblur=function(){
	vali(this,/^\d{6}$/);
}
//1.查找绑定事件元素
//在表单中查找倒数第二个表单元素---提交按钮
var btnSubmit=form.elements[form.length-2];
//2.绑定事件函数
//验证用户名和密码框
/*btnSubmit.onclick=function(){
	//先验证所有表单元素的值是否符合要求
	var rName=vali(txtName,/^\w{1,10}$/);
	var rPwd=vali(txtPwd,/^\d{6}$/);
	//如果都验证正确，就手动提交
	if(rName&&rPwd){
		form.submit();
	}
}*/
btnSubmit.onclick=function (){
	//先验证姓名文本内框，如果验证不通过
	if(vali(txtName,/^\w{1,10}$/)==false){
		//就让姓名文本框自动获得焦点
		txtName.focus();
	}//否则，在验证密码文本框，如果不通过
	else if(vali(txtPwd,/^\d{6}$/)==false){
		//就让密码文本框获得焦点
		txtPwd.focus();
	}//都验证通过，就手动提交
	else{
		form.submit();
	}
}
