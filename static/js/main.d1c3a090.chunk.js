(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a(20)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),l=a(8),r=a.n(l),c=(a(15),a(6)),s=a(1),o=a(2),d=a(4),u=a(3),m=a(5),h=(a(16),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return(a=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).minDate=(new Date).toISOString().slice(0,10),a.state={text:"",date:a.minDate},a.handleDate=function(e){a.setState({date:e.target.value})},a.handleChange=function(e){a.setState({text:e.target.value})},a.handleClick=function(){var e=a.state,t=e.text,n=e.date;t.length>2&&a.state.date>=a.minDate?a.props.add(t,n)&&a.setState({text:"",date:a.minDate}):alert("Zadanie powinno sk\u0142adac si\u0119 minimum z 3 znak\xf3w, a data powinna odwo\u0142ywa\u0107 si\u0119 do przysz\u0142o\u015bci")},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=1*this.minDate.slice(0,4)+1;return e+="-12-31",i.a.createElement("div",{className:"form"},i.a.createElement("input",{id:"addTask",type:"text",placeholder:"Wprowad\u017a zadanie...",value:this.state.text,onChange:this.handleChange}),i.a.createElement("label",{htmlFor:"date"},"Deadline:"),i.a.createElement("input",{type:"date",value:this.state.date,min:this.minDate,max:e,onChange:this.handleDate}),i.a.createElement("button",{id:"addTaskButton",onClick:this.handleClick},"Dodaj"))}}]),t}(n.Component)),f=(a(17),function(e){var t=e.task,a=t.text,n=t.date,l=t.id,r=t.active,c=t.finishDate;if(r)return i.a.createElement("div",{className:"wrapTask"},i.a.createElement("div",{className:"task"},i.a.createElement("strong",null,a)," ",i.a.createElement("span",null,"do: ",n)),i.a.createElement("button",{className:"doneBtn",onClick:function(){return e.change(l)}},"Zako\u0144cz"),i.a.createElement("button",{className:"deleteBtn",onClick:function(){return e.delete(l)}},"Usu\u0144"));var s=new Date(c).toLocaleString();return i.a.createElement("div",{className:"wrapTaskDone"},i.a.createElement("div",{className:"taskDone"},i.a.createElement("strong",null,a)," - do ",i.a.createElement("span",null,n),i.a.createElement("br",null),"Potwierdzenie wykonania: ",i.a.createElement("span",null,s)),i.a.createElement("button",{className:"deleteBtn",onClick:function(){return e.delete(l)}},"Usu\u0144"))}),k=(a(18),function(e){var t=e.tasks.filter(function(e){return e.active}),a=e.tasks.filter(function(e){return!e.active}),n=t.map(function(t){return i.a.createElement(f,{key:t.id,task:t,delete:e.delete,change:e.change})}),l=a.map(function(t){return i.a.createElement(f,{key:t.id,task:t,delete:e.delete,change:e.change})});return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"active"},i.a.createElement("p",null,"ZADANIA DO WYKONANIA:"),n.length>0?n:i.a.createElement("p",null,"brak zada\u0144 do wykonania.")),i.a.createElement("div",{className:"done"},i.a.createElement("p",null,"WYKONANE ZADANIA: ",i.a.createElement("em",null,"(",a.length,")")),l))}),v=(a(19),function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,i=new Array(n),l=0;l<n;l++)i[l]=arguments[l];return(a=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(i)))).state={tasks:[{id:0,text:"Poszerzy\u0107 wiedz\u0119 o React",date:"2019-08-30",active:!0,finishDate:null},{id:1,text:"Poszerzy\u0107 wiedz\u0119 o Sass",date:"2019-07-31",active:!0,finishDate:null},{id:2,text:"Poszerzy\u0107 wiedz\u0119 o Css",date:"2019-07-20",active:!0,finishDate:null},{id:3,text:"Poszerzy\u0107 wiedz\u0119 o JavaScript",date:"2019-07-25",active:!0,finishDate:null},{id:4,text:"Znale\u017a\u0107 prac\u0119",date:"2019-08-20",active:!0,finishDate:null}]},a.deleteTask=function(e){var t=Object(c.a)(a.state.tasks),n=t.findIndex(function(t){return t.id===e});t.splice(n,1),a.setState({tasks:t})},a.changeTaskStatus=function(e){var t=Array.from(a.state.tasks);t.forEach(function(t){t.id===e&&(t.active=!1,t.finishDate=(new Date).getTime())}),a.setState({tasks:t})},a.addTask=function(e,t){var n={id:a.state.tasks.length+1,text:e,date:t,active:!0,finishDate:null},i=Object(c.a)(a.state.tasks);return i.push(n),a.setState({tasks:i}),!0},a}return Object(m.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement("div",{id:"top"},i.a.createElement("div",{id:"logo"},i.a.createElement("strong",null,"TODO APP"),i.a.createElement("br",null),i.a.createElement("span",null,"BY MATEUSZ PASICH"))),i.a.createElement(h,{add:this.addTask}),i.a.createElement(k,{tasks:this.state.tasks,delete:this.deleteTask,change:this.changeTaskStatus}))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(v,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,1,2]]]);
//# sourceMappingURL=main.d1c3a090.chunk.js.map