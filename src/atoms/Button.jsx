import React,{ useState} from 'react';

function Button(props) {
  const [open, setOpen] =useState(false);
  return(
<li className='Button_Drop'>
  <a className='Button' onClick={()=>setOpen(!open)}> 
  상태변경
  </a>
  {open && props.children}
</li>

  )

}
function DropdownMenu(){
  function DropdownItem(props){
    return(
      <a className='menu-item'>
        {props.children}
      </a>
    )
  }
  return(
    <div className='dropdown'>
      <DropdownItem>삭제하기</DropdownItem>
    <DropdownItem> Todo로 이동</DropdownItem>
    <DropdownItem>Progress로 이동</DropdownItem>
    <DropdownItem> Done으로 이동</DropdownItem>
    </div>
    
  )
}

export default Button ;

