/*var dom = document.getElementById("wrap");
dom.innerText = "我是wrap";*/
Vue.component("my-header",{
	name:"myheader",
	template:`
	            <div class="my-header">
	                <div class="my-header-left">
	                    <a href="#" @click="$emit('handle-children',childrenMessage)">登陆</a>
	                </div>
	                <div class="my-header-risht">
	                    <a href="#" >注册</a>
	                </div>
	                <div class="my-header-risht">
	                    <a href="#" @click=handlePropsData>查看</a>
	                </div>
	                <div class="my-header-props">
	                     {{todo}},{{chunMymessage}}
	                </div>
	            </div>
	        `,
	data:function(){
		return {
		    hsaderMessage:"我是header组件",
		    childrenMessage:"我是子组件",
		    propsDataChildren:null,
		}
	},
	methods:{
		/*handleHeader:function(){
			console.log(this)
		},*/
		handlePropsData:function(){
			//this.hsaderMessage=this.todo;
			this.propsDataChildren=this.todo;
			this.propsDataChildren=this.hsaderMessage;
			console.log(this.propsDataChildren);
		}
		
	},
	computed:{
		
	},
	props:{
		todo:{
			type:String,
			default:"",
		},
		chunMymessage:{
			type:String,
			default:"",
		}
	}
	    
	
	
})

var Vm = new Vue({
	/*管理dom对象*/
	el:"#wrap",
	//data管理数据
	data: function(){
		return{
			message: "hai,我是wrap",
			myPMessage:"我是p标签",
			mtTitle:"我是title",
			
			flag:true,
			list:[
			    { id: 1,value: "香蕉"},
			    { id: 2,value: "苹果"},
			    { id: 3,value: "橘子"},
			],
			activaClass:"my-common-class",
			commonClass:"my-font-common-class",
			flagClass:true,
			inputValue:"",
		}
	},
	/*管理行为·，*/
	methods:{
		handleFunction: function(){
			console.log(this.message);
			this.flag=false;
			this.handleFunctio();
			console.log("父盒子触发事件")
		},
		handleFunctio(){
			this.message = "欢迎学习"
		},
		//keyup 键盘事件离开时触发
		//keyDown 键盘事件点击时
		handlekeyUp:function(){
			console.log("键盘事件离开时触发")
		},
		handlekeyDown: function(){
			console.log("键盘事件点击时")
		},
		handleChildrenClick:function(e){
			//e.stopPropagation;//阻止事件冒泡
			console.log("子盒子触发事件")
		},
		handleParent:function(data){
			console.log(data,"data")
		},
	},
	//计算属性
	computed:{
		resverseMessage:function(){
			return this.message.split("").reverse().join("")
		}
	},
	//watch数据监听器
	/*watch:{
		flag:function(oldValue,newValue){
			console.log(oldValue,"旧值",newValue,"新值");
		}
	}*/
})