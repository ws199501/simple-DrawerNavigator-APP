<h3>写在前面：</h3>
<div>
  这是刚工作不久的小菜鸟的第一颗蛋蛋，一直想总结一些什么，但是不知道怎么开始，今天，我下了第一颗蛋，希望如果有人看到可以提出意见，但是请别把我打击的弃坑，嘤嘤。
</div>
<h3>项目介绍：</h3>
<div>这是用create-react-app创建的一个APP项目。
  DrawerNavigator是react-navigation中抽屉的形式
  ![项目截图](./img/app.png)
</div>
<h4>项目里的关于DrawerNavigator的总结：</h4>
<div>
  第一：DrawerNavigator本身可以有自己的头部，但是用起来感觉有点略微复杂和不好控制，这里我用自己的组件替代了。（components文件里的navigator组件）。
  第二：DrawerNavigator的抽屉可以打开和关闭，但是有时候会出现打开命令 this.props.navigation.navigate('DrawerOpen') 失灵的情况，在一番寻找之后找到了解决办法。
  drawerOpenRoute: 'DrawerOpen',
  drawerCloseRoute: 'DrawerClose',
  drawerToggleRoute: 'DrawerToggle',  
  第三：关于DrawerNavigator侧边栏的宽度问题，建议用 width = Dimensions.get('window').width - 100 或者 Dimensions.get('window').width * 8 /10 的方式计算宽度。
第四：侧边栏自定义，这里我出现里一个很小又让我苦恼好一会的问题，我没有给侧边栏的页面最外成加flex：1，造成了显示上很大的问题，它直接是肉眼不可见了，让我误会好久以为出现了bug，侧边栏不见了，其实它是高度没有撑开，缩在了最顶上。所以别忘了最外层的flex：1
</div>
这就是最简单的一个使用DrawerNavigator的APP啦～
小插曲：在我第一次使用DrawerNavigator的时候项目基础是架构好了的,用了StackNavigator导航，然后说要用DrawerNavigator抽屉，但是上头认为外层必须用
StackNavigator，DrawerNavigator只能用作组件的性质，不让直接替换，我不能理解，感觉是重复的。我自己搭建的项目中只用了其中一种导航，转跳什么没有问题。
