<template>
  <div class="header">
    <div class="logo">
      <div class="left">
        <img src="../images/yutongLogo.png" alt="" height="40">
        <span style="fontSize: 24px">公众开放平台</span>
      </div>
      <div class="right" >
        <Input v-model="value" placeholder="Enter something..." style="width: 300px"></Input>
        <Button>搜索</Button>
      </div>
    </div>

    <div class="headerBar">
      <div class="headerMenu">
        <div class="left">
          <div class="firstPage" >
            <router-link to="/">首页</router-link>
          </div> 
          <div class="firstPage" >
            <router-link to="/b">数据目录</router-link>
          </div> 
          
        </div>
        <div class="right">
          <span>系统配置</span>
          <span>登录/注销</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        value: ''
      }
    }
  }   
</script>
<style lang="scss" scoped>
  .header{
    width: 100%;
    .logo{
      width: 1280px;
      margin: 0 auto;
      height: 100px;
      .left{
        display: inline-block;
        position: relative;
        top:50%;
        transform:translateY(-50%);
      }
      .right{
        display: inline-block;
        float: right;
        position: relative;
        top:50%;
        transform:translateY(-50%);
      }
    }
    .headerBar{
      width: 100%;
      height: 40px;
      background-color: #20B2AA;
      .headerMenu{
        width: 1280px;
        margin: 0 auto;
        height: 100%;
        font-size: 16px;
        color: #fff;
        .left{
          .firstPage{

            height: 40px;
            display:inline-block;
            a{
              display:inline-block;
              margin: 0 10px;
              color: #fff;
              position:  relative;
              top: 50%;
              transform:translateY(-50%);

              &:hover{
                color:blue;
              }
            }
            &:hover{
              background-color: red;
              color: #fff;
            }

          }

        }  
        .right{
          display: inline-block;
          float: right;
          position:  relative;
          top: 50%;
          transform:translateY(-50%);
          span{
            margin-left: 20px;
          }
        } 
      }
    }   
  }
</style>