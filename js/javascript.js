         window.onload=function(){
            var test1=document.getElementById("test1");
            var test2=document.getElementById("test2");
            var test3=document.getElementById("test3");
            var test4=document.getElementById("test4");
            var start=document.getElementById("start");
            start.onclick=function(){
                //正则表达式Regular
                var Regular=/:[\u4e00-\u9fa5_a-zA-Z0-9\,\.]+/g;
                //输入框因子数
                var arr_num1=test1.value.split(Regular);
                arr_num1.splice(1,1);
                var arr_num2=test2.value.split(Regular);
                arr_num2.splice(1,1);
                var arr_num3=test3.value.split(Regular);
                arr_num3.splice(1,1);
                var arr_num4=test4.value.split(Regular);
                arr_num4.splice(1,1);
                //取水平数
               /*  var pattern = new RegExp("[`~!@#$^&*()=|{}'：，'\\[\\].<>《》/?~！@#￥……&*（）——|{}【】‘”“'。、？]");
                if(pattern.test(test1.value)==true){
                        alert("包括非法字符");
                } */
               

                var arr_level1=test1.value.split(arr_num1[0]);
                // 用正则表达式来分割剩下的字符，提取剩下的数字作为水平数
                arr_level1=arr_level1[1].split(/[, ， 、 : \s+]/);
                arr_level1.splice(0,1);
                // arr_level1表示水平数，能用的索引是arr_level1[1]-arr_level1[3]
                //接下来就是求出每个输入框的水平数\
                var arr_level2=test2.value.split(arr_num2[0]);
                var arr_level3=test3.value.split(arr_num3[0]);
                var arr_level4=test4.value.split(arr_num4[0]);
                arr_level2=arr_level2[1].split(/[, ， 、 : \s+]/);
                arr_level2.splice(0,1);
                arr_level3=arr_level3[1].split(/[, ， 、 : \s+]/);
                arr_level3.splice(0,1);
                arr_level4=arr_level4[1].split(/[, ， 、 : \s+]/);
                arr_level4.splice(0,1);
                var arr3=[[0,0,0,1,1,1,2,2,2],[0,1,2,0,1,2,0,1,2],[0,2,1,2,1,0,1,0,2],[0,1,2,2,0,1,1,2,0]];
                //将数组进行替换元素
                 for(var i=0;i<4;i++)
                 {
                    for(var j=0;j<9;j++)    
                    {
                        switch(arr3[0][j])
                        {
                            case 0:arr3[0][j]=arr_level1[0];
                            break;
                            case 1:arr3[0][j]=arr_level1[1];
                            break;
                            case 2:arr3[0][j]=arr_level1[2];
                            break;
                        }
                        switch(arr3[1][j])
                        {
                            case 0:arr3[1][j]=arr_level2[0];
                            break;
                            case 1:arr3[1][j]=arr_level2[1];
                            break;
                            case 2:arr3[1][j]=arr_level2[2];
                            break;
                        }
                        switch(arr3[2][j])
                        {
                            case 0:arr3[2][j]=arr_level3[0];
                            break;
                            case 1:arr3[2][j]=arr_level3[1];
                            break;
                            case 2:arr3[2][j]=arr_level3[2];
                            break;
                        }
                        switch(arr3[3][j])
                        {
                            case 0:arr3[3][j]=arr_level4[0];
                            break;
                            case 1:arr3[3][j]=arr_level4[1];
                            break;
                            case 2:arr3[3][j]=arr_level4[2];
                            break;
                        }
                    }
                 }
                 //定义新数组arr3_test,用来进行arr3的矩阵置换
                 //初始化arr3_test数组
                 var arr3_test=[];
                for(var i=0;i<arr3[0].length;i++)
                    arr3_test[i]=[];
                // 数组置换
                for(var i=0;i<arr3.length;i++)
                {
                    for(var j=0;j<arr3[i].length;j++)
                    arr3_test[j][i]=arr3[i][j];
                }
                // 在数组头部添加元素
                arr3_test.unshift([arr_num1[0],arr_num2[0],arr_num3[0],arr_num4[0]]);
                var show_result=document.getElementById("show_result");
                show_result.innerHTML=show_result.innerHTML+"<span>是吗</span>";
                // 输出数组
                var str="";
                str+="<table >";
                for(var i=0;i<arr3_test.length;i++){
                    if(i===0){
                        str+="<tr>";
                        for(var j=0;j<arr3_test[i].length;j++)
                        {
                            str+="<th>"+arr3_test[i][j]+"</th>";
                        }
                        str+="</tr>";
                    }
                    else{
                        str+="<tr>";
                        for(var k=0;k<arr3_test[i].length;k++)
                        {
                            str+="<td>"+arr3_test[i][k]+"</td>";
                        }
                        str+="</tr>";
                    }
                }
                str+="</table>";
                show_result.innerHTML=str;

                var pattern2=new RegExp(":[\u4e00-\u9fa5_a-zA-Z0-9\,\.]");

                if(pattern2.test(test1.value)==false){
                    alert("请正确输入");
                    show_result.innerHTML="";
                }else if(pattern2.test(test2.value)==false){
                    alert("请正确输入");
                    show_result.innerHTML="";
                }else if(pattern2.test(test3.value)==false){
                    alert("请正确输入");
                    show_result.innerHTML="";
                }else if(pattern2.test(test4.value)==false){
                    alert("请正确输入");
                    show_result.innerHTML="";
                }
                 // 使用outerHTML属性获取整个table元素的HTML代码（包括<table>标签），然后包装成一个完整的HTML文档，设置charset为urf-8以防止中文乱码
                var html = "<html><head><meta charset='utf-8' /></head><body>" + document.getElementsByTagName("table")[0].outerHTML + "</body></html>";
                // 实例化一个Blob对象，其构造函数的第一个参数是包含文件内容的数组，第二个参数是包含文件类型属性的对象
                var blob = new Blob([html], { type: "application/vnd.ms-excel" });
                 var a = document.getElementsByTagName("a")[0];
                 // 利用URL.createObjectURL()方法为a元素生成blob URL
                  a.href = URL.createObjectURL(blob);
                 // 设置文件名
                  a.download = "学生成绩表.xls";
            }
        }