<script>

</script>

<template>
    <section class="frame">

        <!-- navbar up -->
        <nav class="navbar px-4 navbar-expand-sm navbar-light bg-light d-flex align-items-center justify-content-between">
            <div class="user">
                <a href="#"><i class=" me-2 fa-solid fa-envelope"></i></a>
                <a href="#"><i class="fa-solid fa-user"></i></a>
            </div>
            <div class="details d-flex align-items-center ">
                <div class="profile_img me-3">
                    <img src="./assets/img/profile.png" alt="">
                </div>
                <div> Welcome <br> <strong>Mattia Barbieri</strong> </div>
            </div>
        </nav>

        <!-- sidebar -->
        <div class="sidebar p-4">
            <h4>- Dashboard -</h4>
            <div class="details d-flex align-items-center my-4">
                <div class="profile_img me-3">
                    <img src="./assets/img/profile.png" alt="">
                </div>
                <div> Welcome <br> <strong>Mattia Barbieri</strong> </div>
            </div>
            <div class="text-uppercase category">general</div>

            <!-- sidebar-commands -->
            <div class="commands">
                <ul>
                    <li>
                        <a href="#"><i class=" me-2 fa-solid fa-house-user"></i>Home</a>
                    </li>
                    <li>
                        <a href="#"><i class=" me-2 fa-solid fa-map-location-dot"></i>Maps</a>
                    </li>
                    <li>
                        <a href="#"><i class=" me-2 fa-solid fa-gear"></i>Config</a>
                    </li>
                    <li>
                        <a href="#"><i class=" me-2 fa-solid fa-envelope"></i>Contacts</a>
                    </li>
                </ul>
            </div>
        </div>


        <!-- main -->
        <main>

        </main>



    </section>
</template>

<style lang="scss">
@use './styles/general.scss';

.frame {
    position: relative;

    .navbar {
        position: absolute;
        top: 0;
        left: 20vw;
        background-color: #f7f7f7;
        width: 80vw;

        .details {


            .profile_img {
                width: 60px;
                border: 1px solid transparent;
                border-radius: 50%;

                img {
                    border-radius: 50%;
                }
            }
        }

        .user {
            a {
                color: rgba(126, 43, 43, 0.611);
                font-size: 30px;
                margin-right: 1rem;
            }
        }

    }

    .sidebar {
        width: 20vw;
        background-color: #2a4054;
        position: absolute;
        top: 0;
        left: 0;
        height: 100vh;
        color: white;

        .profile_img {
            width: 60px;
            border: 1px solid transparent;
            border-radius: 50%;

            img {
                border-radius: 50%;
            }
        }

        .category {
            padding-bottom: 0.5rem;
            border-bottom: 3px solid white;
        }

        .commands {
            ul {
                list-style: none;
                padding: 0;

                li {
                    margin: 1rem 0;

                    a {
                        color: white;
                    }

                }

            }

        }
    }
}
</style>
