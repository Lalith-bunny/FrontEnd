function welcome(prop){
  return <h2>welcome {prop.name}!!</h2>
}
function temp(){
  return(
    <div>
      <welcome name="Harish"/>
      <welcome name="Harsh"/>

    </div>
  );
}temp();