const Login = () => (

    <div class="wrapper">
        <div class="card">
            <form action="#" class="d-flex flex-column">
                <div class="h3 text-center text-white">Login Admin</div>
                <div class="d-flex align-items-center input-field my-3 mb-4"><span class="far fa-user p-2"></span> 
                <input type="text" placeholder="Nama" required class="form-control"/> </div>
                <div class="d-flex align-items-center input-field mb-4"> <span class="fas fa-lock p-2"></span> 
                <input type="text" placeholder="No.Telp" required class="form-control" id="hp"/>
                </div>
                <div class="d-sm-flex align-items-sm-center justify-content-sm-between">
                </div>
                <div class="my-3"> <a href="/berandaAdmin" type="submit" value="Login" class="btn btn-primary">Login</a></div>
                <div class="mb-3"> <span class="text-light-white">Don't have an account?</span> <a href="#">Sign Up</a> </div>
            </form>
            <div class="position-relative border-bottom my-3 line"> <span class="connect">or connect with</span> </div>
            <div class="text-center py-3 connections"> <a href="https://wwww.facebook.com" target="_blank" class="px-2"> <img src="/img/facebook.jpeg" alt=""/> 
            </a> <a href="https://www.google.com" target="_blank" class="px-2"> <img src="/img/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png" alt=""/> </a> 
            <a href="https://www.github.com" target="_blank" class="px-2"> <img src="/img/512x512-logo-github-icon-35.png" alt=""/> </a> </div>
        </div>
    </div>
    
    );
    
    export default Login;