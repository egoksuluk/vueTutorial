<template>
  <div>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
    <br />
    <router-view/>
  </div>
</template>

<style>
  a{
    text-decoration: none;
    margin-right: 5px;
    padding: 5px 10px;
    background-color: #ccc;
    color : #000;
    font-weight: bold;
  }
  a:hover{
    background-color: #666;
  }
  .active {
    background-color: #000;
    color : coral;
    border-bottom: 2px solid coral;
  }
</style>