
<script lang="ts">
     import Bee from "carbon-pictograms-svelte/lib/Bee.svelte";
     import Register from './Register.svelte'
     import Login from './Login.svelte'
</script>


<header>
    <div class="header__left">
        <a href="/">
            <Bee class="pictogram"/> 
            <h3>BUG | School Management Software</h3>
        </a>
    </div>

    <div class="header__right">
        <nav>
            <ul>    
                <li>
                   <Register/>
                </li>
                <li>
                    <Login/>
                </li>
            </ul>
        </nav>
    </div>
</header>
<style>
    header{
        display: flex;
        padding: var(--default-padding);
        justify-content: space-between;
    }

    .header__left{
        display: flex;
        align-items: center;
    }
    .header__left a{
        display: flex;
        align-items: center;
    }
    .header__left a h3{
        color: var(--default-color);
        font-weight: bold;
    }

    .header__right nav ul {
        display: flex;
        justify-content: space-between;
        padding: var(--default-padding)
    }

     .header__left a{
        text-decoration: none;
    }

     .header__right nav ul li  {
         margin-left: var(--default-padding);
     }

     .header__right nav ul li a:hover{
        color: darkblue;
     }
</style>