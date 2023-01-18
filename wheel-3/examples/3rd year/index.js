console.log("hello world")
switch (indicatedSegment.text) {
    case "python":
        {

            console.log("python=")
            var num = Math.random() * 20;
            console.log("hello world", num
            )
            if (num <= 20) {

                call = () => {

                    console.log(obj1.question, obj1.Option1, obj1.Option2)
                    document.getElementById("q").innerHTML = obj1.question;
                    document.getElementById("op1").innerHTML = obj1.Option1;
                    document.getElementById("op2").innerHTML = obj1.Option2;
                    document.getElementById("op3").innerHTML = obj1.Option3;
                    document.getElementById("op4").innerHTML = obj1.Option4;
                    res = () => { document.getElementById("ans").innerHTML = obj1.answer }


                }
                call();

            }
            else {
                console.log("wlse", num)
            }

        }

        break;


    case "html/css":
        {

            console.log("html/css")
            var num = Math.random() * 6;
            if (num == 1) {
                call = () => {
                    obj1 = net1;

                    console.log(obj1.question, obj1.Option1, obj1.Option2)
                    document.getElementById("q").innerHTML = obj1.question;
                    document.getElementById("op1").innerHTML = obj1.Option1;
                    document.getElementById("op2").innerHTML = obj1.Option2;
                    document.getElementById("op3").innerHTML = obj1.Option3;
                    document.getElementById("op4").innerHTML = obj1.Option4;
                    res = () => { document.getElementById("ans").innerHTML = obj1.answer }


                }
                elseif(num == 2)
                {
                    call = () => {
                        obj1 = net2;

                        console.log(obj1.question, obj1.Option1, obj1.Option2)
                        document.getElementById("q").innerHTML = obj1.question;
                        document.getElementById("op1").innerHTML = obj1.Option1;
                        document.getElementById("op2").innerHTML = obj1.Option2;
                        document.getElementById("op3").innerHTML = obj1.Option3;
                        document.getElementById("op4").innerHTML = obj1.Option4;
                        res = () => { document.getElementById("ans").innerHTML = obj1.answer }


                    }
                    elseif(num = 3)
                    {
                        call = () => {
                            obj1 = net3;

                            console.log(obj1.question, obj1.Option1, obj1.Option2)
                            document.getElementById("q").innerHTML = obj1.question;
                            document.getElementById("op1").innerHTML = obj1.Option1;
                            document.getElementById("op2").innerHTML = obj1.Option2;
                            document.getElementById("op3").innerHTML = obj1.Option3;
                            document.getElementById("op4").innerHTML = obj1.Option4;
                            res = () => { document.getElementById("ans").innerHTML = obj1.answer }

                        }
                        elseif(num == 4)
                        {
                            call = () => {
                                obj1 = net4;

                                console.log(obj1.question, obj1.Option1, obj1.Option2)
                                document.getElementById("q").innerHTML = obj1.question;
                                document.getElementById("op1").innerHTML = obj1.Option1;
                                document.getElementById("op2").innerHTML = obj1.Option2;
                                document.getElementById("op3").innerHTML = obj1.Option3;
                                document.getElementById("op4").innerHTML = obj1.Option4;
                                res = () => { document.getElementById("ans").innerHTML = obj1.answer }


                            }
                            elseif(num == 5)
                            {
                                call = () => {


                                    console.log(obj1.question, obj1.Option1, obj1.Option2)
                                    document.getElementById("q").innerHTML = obj1.question;
                                    document.getElementById("op1").innerHTML = obj1.Option1;
                                    document.getElementById("op2").innerHTML = obj1.Option2;
                                    document.getElementById("op3").innerHTML = obj1.Option3;
                                    document.getElementById("op4").innerHTML = obj1.Option4;
                                    res = () => { document.getElementById("ans").innerHTML = obj1.answer }
                                }



                        
                            }
                            
                                
                            }
                            break;
    }
    
default:
{

}        
