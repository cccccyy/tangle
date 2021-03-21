$(()=>{
  //get dom elem
  let $width = $('#width'),
      $height = $('#height'),
      $btnCal = $('#calc')
      $perimeter = $('#perimeter'),
      $widthValidate = $('#width-validate'),
      $heightValidate = $('#height-validate'),
      $area = $('#area');
  /*calc button click*/
  $btnCal.click(()=>{
    //get value
    let w = Number($width.val()),
        h = Number($height.val());
    //validate
  
    if(validate($width,$widthValidate) && validate($height,$heightValidate)){
      //calc
      let p = Number((w+h)*2),
          a = Number(w*h);
      //output
      $perimeter.val(p);
      $area.val(a);
    }
  });
});

function validate(input,output){
  //console.log(input.val());
  //is empty
  if(input.val() === ''){
    output.html('该字段不能为空');
    return false;
  }else{
    output.html('');
  }
  //is Number
  let val = Number(input.val());
  if(isNaN(val)){
    output.html('该字段应该是数值');
    return false;
  }else{
    output.html('');
  }
  //is >0
  if(val < 0){
    output.html('该字段应为正数');
    return false;
  }else{
    output.html('');
  }
  //
  return true;
}
