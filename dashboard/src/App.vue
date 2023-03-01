<script>

</script>

<template>
    <section class="frame">

        <!-- navbar up -->
        <nav class="navbar navbar-expand-sm navbar-light bg-light">
            <a class="navbar-brand" href="#">Navbar</a>
            <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId"
                aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="collapsibleNavId">
                <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Link</a>
                    </li>
                </ul>
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
        left: 250px;
        width: 100%;
        background-color: #f7f7f7;
    }

    .sidebar {
        width: 250px;
        background-color: #2a4054;
        position: absolute;
        top: 0;
        left: 0;
        height: 1000px;
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
