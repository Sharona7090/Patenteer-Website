function appFunc(){
  document.getElementById("appbtn").style = "background-color:#2d787d; color:white; border:2px solid #2d787d;font-weight: 600"
  document.getElementById("prosbtn").style = "background-color:transparent; color:#2d787d; border:2px solid #2d787d; font-weight: 600;"
  document.getElementById("emailbtn").style = "background-color:transparent; color:#2d787d; border:2px solid #2d787d; font-weight: 600;"
  document.getElementById("emailSec").style.display = "none"
    document.getElementById("prosSec").style.display = "none"
      document.getElementById("appSec").style.display = "block"

  }
  function prosFunc(){
    document.getElementById("appbtn").style = "background-color:transparent; color:#2d787d; border:2px solid #2d787d; font-weight: 600;"
    document.getElementById("prosbtn").style = "background-color:#2d787d; color:white; border:2px solid #2d787d;font-weight: 600"
    document.getElementById("emailbtn").style = "background-color:transparent; color:#2d787d; border:2px solid #2d787d; font-weight: 600;"
    document.getElementById("emailSec").style.display = "none"
      document.getElementById("prosSec").style.display = "block"
        document.getElementById("appSec").style.display = "none"
    }
    function emailFunc(){
      document.getElementById("appbtn").style = "background-color:transparent; color:#2d787d; border:2px solid #2d787d; font-weight: 600;"
      document.getElementById("prosbtn").style = "background-color:transparent; color:#2d787d; border:2px solid #2d787d; font-weight: 600;"
      document.getElementById("emailbtn").style = "background-color:#2d787d; color:white; border:2px solid #2d787d;font-weight: 600"
      document.getElementById("emailSec").style.display = "block"
      document.getElementById("prosSec").style.display = "none"
      document.getElementById("appSec").style.display = "none"
}
// function actionFunc(){
//   document.getElementById("appbtn").style = "background-color:transparent; color:#2d787d; border:2px solid #2d787d; font-weight: 600;"
//   document.getElementById("prosbtn").style = "background-color:transparent; color:#2d787d; border:2px solid #2d787d; font-weight: 600;"
//   document.getElementById("emailbtn").style = "background-color:transparent; color:#2d787d; border:2px solid #2d787d; font-weight: 600;"
//   document.getElementById("actionbtn").style = "background-color:#2d787d; color:white; border:2px solid #2d787d;font-weight: 600"
//   }
