   <script>
            layui.use('element', function(){
              var $ = layui.jquery
              ,element = layui.element; //Tab的切换功能，切换事件监听等，需要依赖element模块
              
              //触发事件
              var active = {
                tabAdd: function(){
                  //新增一个Tab项
                  var htmlurl=$(this).attr('data-url');
                  var mytitle=$(this).attr('mytitle'); 
//                  alert("触发tab增加事件："+mytitle);
                  //先判断是否已经有了tab
                  var arrayObj = new Array();　//创建一个数组  
                      $(".layui-tab-title").find('li').each(function() {
                          var y = $(this).attr("lay-id"); 
                          arrayObj.push(y);
                   });
//                    alert("遍历取到的数组："+arrayObj);
                    var have=$.inArray(mytitle, arrayObj);  //返回 3,
                    if (have>=0) {
                        //tab已有标签
//                        alert("遍历的已有标签："+mytitle);
                      element.tabChange('demo', mytitle); //切换到当前点击的页面
                    } else{
                      //没有相同tab
//                      alert("遍历的没有相同tab："+mytitle);
                      element.tabAdd('demo', {
                        title:mytitle //用于演示
                        ,content: '<iframe style="width: 100%;height: 100%;" scrolling="no" src='+htmlurl+' ></iframe>'
                        ,id: mytitle //实际使用一般是规定好的id，这里以时间戳模拟下
                      })
                      element.tabChange('demo', mytitle); //切换到当前点击的页面
                    }
                }
               
              };
              $(".leftdaohang").click(function(){
                var type="tabAdd";
                var othis = $(this);
//                var htmlurl=$(this).attr('data-url');
//                var mytitle=$(this).attr('mytitle');
                active[type] ? active[type].call(this, othis) : '';
              });
              
            });
        </script>
