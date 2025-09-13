function Condition()
{
    var op=6;
   return(
    <div>
        {
          op==1?<h1>Hindi Me Bat Kare</h1>:
          op==2?<h1>English Me Bat Kare</h1>:
          op==3?<h1>Telgu Me Bat Kare</h1>:
          op==4?<h1>Tamil Me Bat Kare</h1>:
          <h1>Please select atleast 1 option</h1>
        }
    </div>
   )
}
export default Condition