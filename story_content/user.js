function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5ZFHO7vnn1X":
        Script1();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbze2spk8FLFH69S6dbnFtWYnw0Iavy39JS7LPyKW2ipnR65TnM3e772703Tmo3Iz-6FbA/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({q1attempts:player.GetVar("q1attempts"),q1answeredcorrect:player.GetVar("q1answeredcorrect")})
	}
	)
}

