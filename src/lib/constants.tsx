import { ContactIcon, FolderKanbanIcon, HouseIcon, RssIcon } from "lucide-react";
import { Metadata } from "next";

export const myName = "Abdus Samad"

export const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "/"
export const underConstructionLink = "https://images.pexels.com/photos/211122/pexels-photo-211122.jpeg"

export const links = [
    {
        name: "home",
        href: '/',
        icon: <HouseIcon />
    },
    {
        name: "project",
        href: '/project',
        icon: <FolderKanbanIcon />
    },
    {
        name: "blog",
        href: '/blog',
        icon: <RssIcon />
    },
    {
        name: "contact",
        href: '/contact',
        icon: <ContactIcon />
    },
]

export const skills = [
    {
        name: "CSS",
        icon: <svg xmlns="http://www.w3.org/2000/svg"
            fill='currentColor'
            className='size-5'
            viewBox="0 0 50 50" fillRule="evenodd"><path fillRule="evenodd" d="M 39 40 L 25 44 L 11 40 L 8 6 L 42 6 C 41 17.332031 40 28.667969 39 40 Z M 39.816406 8 L 10.183594 8 L 12.871094 38.453125 L 25 41.921875 L 37.128906 38.453125 Z M 16.800781 28 L 20.800781 28 L 20.898438 30.5 L 25 31.898438 L 29.101563 30.5 L 29.398438 26 L 20.601563 26 L 20.398438 22 L 29.601563 22 L 29.898438 18 L 16.101563 18 L 15.800781 14 L 34.101563 14 L 33.601563 22 L 32.898438 33.5 L 25 36.101563 L 17.101563 33.5 Z" /></svg>,
        level: 9
    },
    {
        name: "JS",
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className='size-5' viewBox="0 0 50 50">
            <path d="M 43.335938 4 L 6.667969 4 C 5.195313 4 4 5.195313 4 6.667969 L 4 43.332031 C 4 44.804688 5.195313 46 6.667969 46 L 43.332031 46 C 44.804688 46 46 44.804688 46 43.335938 L 46 6.667969 C 46 5.195313 44.804688 4 43.335938 4 Z M 27 36.183594 C 27 40.179688 24.65625 42 21.234375 42 C 18.140625 42 15.910156 39.925781 15 38 L 18.144531 36.097656 C 18.75 37.171875 19.671875 38 21 38 C 22.269531 38 23 37.503906 23 35.574219 L 23 23 L 27 23 Z M 35.675781 42 C 32.132813 42 30.121094 40.214844 29 38 L 32 36 C 32.816406 37.335938 33.707031 38.613281 35.589844 38.613281 C 37.171875 38.613281 38 37.824219 38 36.730469 C 38 35.425781 37.140625 34.960938 35.402344 34.199219 L 34.449219 33.789063 C 31.695313 32.617188 29.863281 31.148438 29.863281 28.039063 C 29.863281 25.179688 32.046875 23 35.453125 23 C 37.878906 23 39.621094 23.84375 40.878906 26.054688 L 37.910156 27.964844 C 37.253906 26.789063 36.550781 26.328125 35.453125 26.328125 C 34.335938 26.328125 33.628906 27.039063 33.628906 27.964844 C 33.628906 29.109375 34.335938 29.570313 35.972656 30.28125 L 36.925781 30.691406 C 40.171875 32.078125 42 33.496094 42 36.683594 C 42 40.117188 39.300781 42 35.675781 42 Z"></path>
        </svg>,
        level: 8
    },
    {
        name: "React.JS",
        icon: <svg xmlns="http://www.w3.org/2000/svg" className='size-5' fill="currentColor" viewBox="0 0 30 30">
            <path d="M 10.679688 4.1816406 C 10.068687 4.1816406 9.502 4.3184219 9 4.6074219 C 7.4311297 5.5132122 6.8339651 7.7205462 7.1503906 10.46875 C 4.6127006 11.568833 3 13.188667 3 15 C 3 16.811333 4.6127006 18.431167 7.1503906 19.53125 C 6.8341285 22.279346 7.4311297 24.486788 9 25.392578 C 9.501 25.681578 10.067687 25.818359 10.679688 25.818359 C 11.982314 25.818359 13.48785 25.164589 15 24.042969 C 16.512282 25.164589 18.01964 25.818359 19.322266 25.818359 C 19.933266 25.818359 20.499953 25.681578 21.001953 25.392578 C 22.570814 24.486793 23.167976 22.279432 22.851562 19.53125 C 25.388297 18.431178 27 16.81094 27 15 C 27 13.188667 25.387299 11.568833 22.849609 10.46875 C 23.165872 7.7206538 22.56887 5.5132122 21 4.6074219 C 20.499 4.3174219 19.932312 4.1816406 19.320312 4.1816406 C 18.017686 4.1816406 16.51215 4.8354109 15 5.9570312 C 13.487763 4.8354109 11.981863 4.1816406 10.679688 4.1816406 z M 10.679688 5.9316406 C 11.461321 5.9316406 12.49496 6.3472486 13.617188 7.1171875 C 12.95737 7.7398717 12.311153 8.4479321 11.689453 9.2363281 C 10.681079 9.3809166 9.7303472 9.5916908 8.8496094 9.8554688 C 8.8448793 9.7943902 8.8336776 9.7303008 8.8300781 9.6699219 C 8.7230781 7.8899219 9.114 6.5630469 9.875 6.1230469 C 10.1 5.9930469 10.362688 5.9316406 10.679688 5.9316406 z M 19.320312 5.9316406 C 19.636312 5.9316406 19.9 5.9930469 20.125 6.1230469 C 20.886 6.5620469 21.276922 7.8899219 21.169922 9.6699219 C 21.166295 9.7303008 21.155145 9.7943902 21.150391 9.8554688 C 20.2691 9.5915252 19.317669 9.3809265 18.308594 9.2363281 C 17.686902 8.4480417 17.042616 7.7397993 16.382812 7.1171875 C 17.504962 6.3473772 18.539083 5.9316406 19.320312 5.9316406 z M 15 8.2285156 C 15.27108 8.4752506 15.540266 8.7360345 15.8125 9.0214844 C 15.542718 9.012422 15.274373 9 15 9 C 14.726286 9 14.458598 9.0124652 14.189453 9.0214844 C 14.461446 8.7363308 14.729174 8.4750167 15 8.2285156 z M 15 10.75 C 15.828688 10.75 16.614128 10.796321 17.359375 10.876953 C 17.813861 11.494697 18.261774 12.147811 18.681641 12.875 C 19.084074 13.572033 19.439938 14.285488 19.753906 15 C 19.439896 15.714942 19.084316 16.429502 18.681641 17.126953 C 18.263078 17.852044 17.816279 18.500949 17.363281 19.117188 C 16.591711 19.201607 15.800219 19.25 15 19.25 C 14.171312 19.25 13.385872 19.203679 12.640625 19.123047 C 12.186139 18.505303 11.738226 17.854142 11.318359 17.126953 C 10.915684 16.429502 10.560194 15.714942 10.246094 15 C 10.559972 14.285488 10.915926 13.572033 11.318359 12.875 C 11.737083 12.149909 12.183612 11.499051 12.636719 10.882812 C 13.408289 10.798393 14.199781 10.75 15 10.75 z M 19.746094 11.291016 C 20.142841 11.386804 20.524253 11.490209 20.882812 11.605469 C 20.801579 11.97252 20.702235 12.346608 20.589844 12.724609 C 20.461164 12.483141 20.336375 12.240903 20.197266 12 C 20.054139 11.752196 19.895244 11.529558 19.746094 11.291016 z M 10.251953 11.292969 C 10.103305 11.530776 9.9454023 11.752991 9.8027344 12 C 9.6636666 12.240944 9.5387971 12.483106 9.4101562 12.724609 C 9.29751 12.345829 9.1965499 11.971295 9.1152344 11.603516 C 9.4803698 11.48815 9.86083 11.385986 10.251953 11.292969 z M 7.46875 12.246094 C 7.6794464 13.135714 7.9717297 14.057918 8.3476562 14.998047 C 7.9725263 15.935943 7.6814729 16.856453 7.4707031 17.744141 C 5.7292327 16.903203 4.75 15.856373 4.75 15 C 4.75 14.121 5.701875 13.119266 7.296875 12.322266 C 7.3513169 12.295031 7.4131225 12.272692 7.46875 12.246094 z M 22.529297 12.255859 C 24.270767 13.096797 25.25 14.143627 25.25 15 C 25.25 15.879 24.298125 16.880734 22.703125 17.677734 C 22.648683 17.704969 22.586877 17.727308 22.53125 17.753906 C 22.32043 16.863764 22.030541 15.940699 21.654297 15 C 22.028977 14.062913 22.318703 13.142804 22.529297 12.255859 z M 15 13 C 13.895 13 13 13.895 13 15 C 13 16.105 13.895 17 15 17 C 16.105 17 17 16.105 17 15 C 17 13.895 16.105 13 15 13 z M 9.4101562 17.275391 C 9.5388794 17.516948 9.6655262 17.759008 9.8046875 18 C 9.9476585 18.247625 10.104915 18.470608 10.253906 18.708984 C 9.857159 18.613196 9.4757466 18.509791 9.1171875 18.394531 C 9.1984813 18.02725 9.2976676 17.653633 9.4101562 17.275391 z M 20.589844 17.277344 C 20.702364 17.655759 20.803517 18.02905 20.884766 18.396484 C 20.51963 18.51185 20.13917 18.614014 19.748047 18.707031 C 19.896695 18.469224 20.054598 18.247009 20.197266 18 C 20.336044 17.759557 20.461449 17.518344 20.589844 17.277344 z M 8.8496094 20.144531 C 9.7309004 20.408475 10.682331 20.619073 11.691406 20.763672 C 12.313288 21.552345 12.957085 22.261935 13.617188 22.884766 C 12.495042 23.654481 11.461272 24.070312 10.679688 24.070312 C 10.363687 24.070312 10.1 24.006953 9.875 23.876953 C 9.114 23.437953 8.7230781 22.112031 8.8300781 20.332031 C 8.8337424 20.271023 8.8447938 20.206253 8.8496094 20.144531 z M 21.150391 20.144531 C 21.155182 20.206253 21.166285 20.271023 21.169922 20.332031 C 21.276922 22.112031 20.886 23.436953 20.125 23.876953 C 19.9 24.006953 19.637312 24.070313 19.320312 24.070312 C 18.538728 24.070312 17.504958 23.654609 16.382812 22.884766 C 17.042964 22.261863 17.688542 21.552454 18.310547 20.763672 C 19.318921 20.619083 20.269653 20.408309 21.150391 20.144531 z M 14.1875 20.978516 C 14.457282 20.987578 14.725627 21 15 21 C 15.274373 21 15.542718 20.987578 15.8125 20.978516 C 15.540266 21.263964 15.27108 21.524765 15 21.771484 C 14.72892 21.524749 14.459734 21.263966 14.1875 20.978516 z"></path>
        </svg>,
        level: 8
    },
    {
        name: "Next.JS",
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className='size-5' viewBox="0 0 48 48">
            <path d="M 24 4 C 12.972 4 4 12.972 4 24 C 4 35.028 12.972 44 24 44 C 35.028 44 44 35.028 44 24 C 44 12.972 35.028 4 24 4 z M 24 7 C 33.374 7 41 14.626 41 24 C 41 29.852 38.027672 35.020078 33.513672 38.080078 L 19.742188 17.660156 C 19.375187 17.113156 18.687547 16.874453 18.060547 17.064453 C 17.430547 17.258453 17 17.841 17 18.5 L 17 31.5 C 17 32.328 17.672 33 18.5 33 C 19.328 33 20 32.328 20 31.5 L 20 23.40625 L 30.876953 39.533203 C 28.770953 40.468203 26.448 41 24 41 C 14.626 41 7 33.374 7 24 C 7 14.626 14.626 7 24 7 z M 29.5 15 C 28.672 15 28 15.672 28 16.5 L 28 24.986328 L 31 29.289062 L 31 16.5 C 31 15.672 30.328 15 29.5 15 z"></path>
        </svg>,
        level: 7
    },
    {
        name: "Tailwind CSS",
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill='currentColor' className='size-5' viewBox="0 0 24 24">
            <path d="M22.105 7.553c-.224.448-.523.723-.914.838-.612.183-1.343-.052-1.685-.253-.451-.265-.974-.667-1.527-1.092C16.214 5.688 14.018 4 11 4 8.586 4 7.346 5.239 5.293 7.293L6.7 8.714c.546-.425 4.031-.015 5.552 1.194C14.511 11.703 16.142 13 18 13c2.659 0 4.879-1.741 5.94-4.658L22.105 7.553zM16.192 15.391c-.614.18-1.343-.052-1.685-.253-.451-.265-.974-.667-1.527-1.092C11.214 12.688 9.018 11 6 11c-2.414 0-3.654 1.239-5.707 3.293L1.7 15.714c.545-.427 4.032-.014 5.552 1.194C9.511 18.703 11.142 20 13 20c2.659 0 4.879-1.741 5.94-4.658l-1.834-.789C16.881 15.001 16.583 15.275 16.192 15.391z"></path>
        </svg>,
        level: 9
    },
    {
        name: "Node JS",
        icon: <svg xmlns="http://www.w3.org/2000/svg" className='size-5' fill='currentColor' viewBox="0 0 16 16">
            <path d="M 8 1.0234375 C 7.736875 1.0234375 7.4742344 1.0924687 7.2402344 1.2304688 L 2.7402344 3.8789062 C 2.2832344 4.1469063 2 4.642875 2 5.171875 L 2 11.005859 C 2 11.554859 2.29925 12.059266 2.78125 12.322266 L 4.2558594 13.126953 C 4.4828594 13.250953 4.7286094 13.310547 4.9746094 13.310547 C 5.2386094 13.310547 5.4992812 13.239609 5.7382812 13.099609 C 6.1982812 12.826609 6.4726562 12.344594 6.4726562 11.808594 L 6.4726562 5.4648438 L 5.4726562 5.4648438 L 5.4726562 11.808594 C 5.4726562 12.065594 5.3025156 12.195281 5.2285156 12.238281 C 5.1555156 12.281281 4.959375 12.371047 4.734375 12.248047 L 3.2617188 11.445312 C 3.1007187 11.357312 3 11.188859 3 11.005859 L 3 5.171875 C 3 4.995875 3.0940938 4.8302344 3.2460938 4.7402344 L 7.7460938 2.0917969 C 7.9020937 1.9997969 8.0979062 2.0007969 8.2539062 2.0917969 L 12.753906 4.7402344 C 12.904906 4.8302344 13 4.995875 13 5.171875 L 13 11.009766 C 13 11.189766 12.900234 11.359219 12.740234 11.449219 L 8.2402344 13.900391 C 8.0902344 13.980391 7.9097656 13.980391 7.7597656 13.900391 L 6.8808594 13.419922 C 6.7108594 13.629922 6.5 13.810937 6.25 13.960938 C 6.17 14.010938 6.0897656 14.050078 6.0097656 14.080078 L 7.2792969 14.779297 C 7.5092969 14.899297 7.75 14.960938 8 14.960938 C 8.25 14.960938 8.4907031 14.899297 8.7207031 14.779297 L 13.220703 12.320312 C 13.700703 12.060313 14 11.559766 14 11.009766 L 14 5.171875 C 14 4.642875 13.717719 4.1469062 13.261719 3.8789062 L 8.7617188 1.2304688 C 8.5272187 1.0924688 8.263125 1.0234375 8 1.0234375 z M 9.4511719 5.3183594 C 7.8711719 5.3183594 7.0703125 5.8690781 7.0703125 6.9550781 C 7.0703125 8.1850781 8.4869687 8.3680781 9.1679688 8.4550781 C 9.2659688 8.4680781 9.352875 8.4791875 9.421875 8.4921875 L 9.7207031 8.5449219 C 10.760703 8.7189219 11 8.836875 11 9.171875 C 11 9.333875 10.999172 9.8242188 9.4511719 9.8242188 C 8.1381719 9.8242188 7.8691406 9.4346094 7.8691406 8.8496094 L 6.8691406 8.8496094 C 6.8691406 9.7516094 7.3171719 10.824219 9.4511719 10.824219 C 11.557172 10.824219 12 9.925875 12 9.171875 C 12 7.913875 10.777719 7.7076406 9.8867188 7.5566406 L 9.5996094 7.5078125 C 9.5166094 7.4928125 9.4119219 7.4788438 9.2949219 7.4648438 C 8.6589219 7.3828438 8.0703125 7.2650312 8.0703125 6.9570312 C 8.0703125 6.7340313 8.0691719 6.3193594 9.4511719 6.3183594 C 10.370172 6.3183594 10.837891 6.6207969 10.837891 7.2167969 L 11.837891 7.2167969 C 11.837891 6.2997969 11.209172 5.3183594 9.4511719 5.3183594 z"></path>
        </svg>,
        level: 7
    },
    {
        name: "Prisma ORM",
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill='currentColor' className='size-5' viewBox="0 0 50 50">
            <path d="M44.674,37.568L27.405,1.49c-0.89-1.859-3.473-2.012-4.575-0.271L3.679,31.461c-0.413,0.652-0.401,1.486,0.03,2.126	l9.647,14.323c0.599,0.889,1.7,1.29,2.729,0.994l26.994-7.775C44.596,40.692,45.357,38.994,44.674,37.568z M40.86,38.865	l-22.703,6.369c-0.526,0.148-1.02-0.318-0.906-0.853L25.3,6.749c0.145-0.678,1.064-0.788,1.364-0.163l14.843,30.881	C41.766,38.033,41.459,38.697,40.86,38.865z"></path>
        </svg>,
        level: 10
    },
    {
        name: "Github",
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill='currentColor' className='size-5' viewBox="0 0 24 24">
            <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z"></path>
        </svg>,
        level: 8
    },
    {
        name: "Angular 18",
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill='currentColor' className='size-5' viewBox="0 0 50 50">
            <path d="M 24.960938 2 A 1.0001 1.0001 0 0 0 24.603516 2.0546875 L 3.671875 9.3398438 A 1.0001 1.0001 0 0 0 3.0078125 10.40625 L 6.3144531 37.529297 A 1.0001 1.0001 0 0 0 6.8300781 38.287109 L 24.476562 47.878906 A 1.0001 1.0001 0 0 0 25.435547 47.876953 L 43.173828 38.154297 A 1.0001 1.0001 0 0 0 43.685547 37.398438 L 46.992188 10.277344 A 1.0001 1.0001 0 0 0 46.322266 9.2089844 L 25.253906 2.0527344 A 1.0001 1.0001 0 0 0 24.960938 2 z M 24.9375 4.0585938 L 44.908203 10.841797 L 41.761719 36.648438 L 24.953125 45.861328 L 8.2382812 36.775391 L 5.0898438 10.964844 L 24.9375 4.0585938 z M 25.035156 6 A 1.0001 1.0001 0 0 0 24.09375 6.578125 L 11.09375 34.578125 A 1.0001 1.0001 0 0 0 12 36 L 16.4375 36 A 1.0001 1.0001 0 0 0 17.34375 35.421875 L 19.857422 30.007812 L 30.142578 30.007812 L 32.65625 35.421875 A 1.0001 1.0001 0 0 0 33.5625 36 L 38 36 A 1.0001 1.0001 0 0 0 38.90625 34.578125 L 25.90625 6.578125 A 1.0001 1.0001 0 0 0 25.035156 6 z M 25 9.3730469 L 36.433594 34 L 34.201172 34 L 31.6875 28.585938 A 1.0001 1.0001 0 0 0 30.78125 28.007812 L 19.21875 28.007812 A 1.0001 1.0001 0 0 0 18.3125 28.585938 L 15.796875 34 L 13.566406 34 L 25 9.3730469 z M 25.039062 15.5 A 1.0001 1.0001 0 0 0 24.091797 16.082031 L 20.166016 24.59375 A 1.0001 1.0001 0 0 0 21.074219 26.011719 L 28.925781 26.011719 A 1.0001 1.0001 0 0 0 29.833984 24.59375 L 25.908203 16.082031 A 1.0001 1.0001 0 0 0 25.039062 15.5 z M 25 18.886719 L 27.363281 24.011719 L 22.636719 24.011719 L 25 18.886719 z"></path>
        </svg>,
        level: 5
    },
    {
        name: "Canva",
        icon: <svg xmlns="http://www.w3.org/2000/svg" fill='currentColor' className='size-5' viewBox="0 0 50 50">
            <path d="M 25 2 C 12.310434 2 2 12.310434 2 25 C 2 37.689566 12.310434 48 25 48 C 37.689566 48 48 37.689566 48 25 C 48 12.310434 37.689566 2 25 2 z M 25 4 C 36.608434 4 46 13.391566 46 25 C 46 36.608434 36.608434 46 25 46 C 13.391566 46 4 36.608434 4 25 C 4 13.391566 13.391566 4 25 4 z M 15.117188 17.082031 C 14.400188 17.082031 13.612203 17.295609 12.908203 17.724609 C 9.8402031 19.593609 7.8598125 23.857375 8.2578125 27.109375 C 8.3838125 28.142375 8.8130469 29.27225 9.6230469 30.03125 C 10.169047 30.53725 11.157312 31.160156 12.320312 31.160156 C 13.580312 31.160156 14.645563 30.675313 15.601562 30.070312 C 16.249562 29.656313 16.789094 29.153625 17.246094 28.640625 C 17.567094 29.319625 18.234734 29.777344 18.927734 29.777344 C 19.470734 29.777344 19.980234 29.505047 20.365234 28.998047 C 20.481234 29.466047 20.807625 29.777344 21.390625 29.777344 C 21.816625 29.777344 22.727266 29.352703 23.572266 28.720703 L 23.486328 29.171875 C 23.463328 29.267875 23.454891 29.364891 23.462891 29.462891 C 23.488891 29.677891 23.636078 29.775391 23.830078 29.775391 C 24.237078 29.775391 24.830172 29.38525 24.951172 28.78125 L 25.136719 27.925781 C 25.374719 26.854781 26.940719 25.236328 27.386719 25.236328 C 27.443719 25.236328 27.488047 25.275516 27.498047 25.353516 C 27.531047 25.626516 27.000531 26.521891 26.769531 27.962891 C 26.725531 28.207891 26.718141 28.457125 26.744141 28.703125 C 26.822141 29.346125 27.203344 29.773438 27.902344 29.773438 C 28.506344 29.773437 29.795844 29.264813 30.714844 28.257812 C 30.783844 28.820813 30.903031 29.301375 31.082031 29.609375 C 31.159031 29.745375 31.334234 29.783203 31.490234 29.783203 C 31.685234 29.783203 31.956094 29.706781 32.246094 29.550781 C 32.944094 29.160781 33.856516 28.282578 34.728516 27.017578 C 34.844516 27.036578 34.939641 27.037109 35.056641 27.037109 C 35.405641 27.037109 35.796203 26.913453 36.158203 26.689453 C 36.021203 27.128453 35.970484 27.574234 36.021484 27.990234 C 36.144484 29.002234 37.016203 29.783203 37.908203 29.783203 C 38.431203 29.783203 38.943125 29.510437 39.328125 29.023438 C 39.445125 29.667437 39.858422 30.348813 40.857422 30.757812 C 40.920422 30.796813 40.998641 30.796875 41.056641 30.796875 C 41.250641 30.796875 41.369563 30.661859 41.351562 30.505859 C 41.344562 30.445859 41.292078 30.348484 41.205078 30.271484 C 40.965078 30.057484 40.708672 29.686094 40.638672 29.121094 C 40.605672 28.848094 40.621938 28.517906 40.710938 28.128906 C 40.927937 27.213906 40.974938 26.96075 40.960938 26.84375 C 40.932938 26.60975 40.766266 26.511719 40.572266 26.511719 C 40.164266 26.511719 39.61275 26.919375 39.46875 27.484375 C 39.24475 28.340375 38.635516 28.925781 38.228516 28.925781 C 37.724516 28.925781 37.465484 28.379453 37.396484 27.814453 C 37.224484 26.413453 38.117969 24.679688 39.417969 24.679688 C 39.805969 24.679688 40.211766 24.836562 40.259766 25.226562 C 40.333766 25.829562 39.695562 25.692312 39.726562 25.945312 C 39.757562 26.198312 40.194375 26.277344 40.484375 26.277344 C 40.775375 26.277344 41.624906 26.082844 41.503906 25.089844 C 41.408906 24.310844 40.586719 23.939453 39.636719 23.939453 C 38.520719 23.939453 37.568922 24.507016 36.919922 25.291016 C 36.833922 25.341016 36.743484 25.427109 36.646484 25.537109 C 36.432484 25.791109 36.045016 26.025391 35.541016 26.025391 C 35.483016 26.025391 35.347656 26.005859 35.347656 26.005859 C 35.675656 25.363859 35.908203 24.702188 35.908203 24.117188 C 35.908203 23.182187 35.3275 22.714844 34.6875 22.714844 C 33.8735 22.714844 33.039062 23.435891 33.039062 24.837891 C 33.039062 25.674891 33.368172 26.356562 33.951172 26.726562 C 33.292172 27.817563 32.380141 28.714844 32.244141 28.714844 C 32.167141 28.714844 32.149859 28.636594 32.130859 28.558594 C 32.033859 28.189594 31.935547 27.467531 31.935547 27.019531 C 31.935547 26.221531 32.090859 25.423406 32.380859 24.566406 C 32.419859 24.469406 32.439453 24.370969 32.439453 24.292969 C 32.439453 24.059969 32.284312 23.943359 32.070312 23.943359 C 31.645312 23.943359 31.004609 24.428547 30.849609 24.935547 C 30.694609 25.421547 30.636719 26.084344 30.636719 26.902344 C 30.636719 27.054344 30.639531 27.203563 30.644531 27.351562 C 29.854531 28.395562 28.874312 28.767578 28.570312 28.767578 C 28.189313 28.767578 28.116156 28.453141 28.160156 28.244141 C 28.366156 27.262141 28.677125 26.120328 28.953125 25.361328 C 29.082125 24.991328 29.139234 24.661797 29.115234 24.466797 C 29.072234 24.115797 28.818281 23.941406 28.488281 23.941406 C 27.712281 23.941406 26.415031 24.756187 25.582031 25.867188 L 25.847656 24.666016 C 25.872656 24.550016 25.880094 24.450047 25.871094 24.373047 C 25.843094 24.139047 25.695953 24.042969 25.501953 24.042969 C 24.550953 24.042969 24.381922 24.525141 24.294922 24.994141 C 24.272922 25.107141 23.997438 26.537359 23.773438 27.693359 C 23.061437 28.332359 22.291031 28.746094 22.082031 28.746094 C 21.818031 28.746094 21.731609 28.538719 21.724609 28.386719 C 21.714609 28.212719 21.908078 27.368234 21.955078 27.115234 C 21.980078 26.999234 21.987516 26.902219 21.978516 26.824219 C 21.952516 26.609219 21.804797 26.511719 21.591797 26.511719 C 21.182797 26.511719 20.629328 26.900375 20.486328 27.484375 C 20.260328 28.341375 19.674578 28.925781 19.267578 28.925781 C 18.763578 28.925781 18.483016 28.381937 18.416016 27.835938 C 18.268016 26.626938 19.039547 24.679688 20.435547 24.679688 C 20.823547 24.679687 21.227391 24.816078 21.275391 25.205078 C 21.352391 25.828078 20.732625 25.672313 20.765625 25.945312 C 20.795625 26.198312 21.231906 26.275391 21.503906 26.275391 C 21.814906 26.275391 22.642437 26.080422 22.523438 25.107422 C 22.428437 24.327422 21.62625 23.9375 20.65625 23.9375 C 18.41425 23.9375 16.907781 26.142437 17.050781 27.898438 C 16.470781 28.573437 15.892094 28.985813 14.871094 29.507812 C 14.286094 29.799813 13.629766 29.974609 13.009766 29.974609 C 11.148766 29.974609 10.239594 28.26125 10.058594 26.78125 C 9.5945938 22.98425 12.932766 17.765625 15.259766 17.765625 C 15.802766 17.765625 16.286953 18.236656 16.376953 18.972656 C 16.515953 20.116656 16.494547 20.927016 15.310547 21.916016 C 15.181547 22.023016 15.143937 22.198734 15.210938 22.302734 C 15.310937 22.457734 15.629484 22.472484 16.271484 22.146484 C 17.530484 21.511484 17.984703 20.531484 17.845703 19.396484 C 17.691703 18.136484 16.591187 17.082031 15.117188 17.082031 z M 34.222656 23.466797 C 34.435656 23.466797 34.707031 23.777516 34.707031 24.478516 C 34.707031 24.849516 34.630141 25.219844 34.494141 25.589844 C 34.145141 25.220844 33.873047 24.655375 33.873047 24.109375 C 33.873047 23.817375 33.970656 23.467797 34.222656 23.466797 z"></path>
        </svg>,
        level: 10
    },
]

export const mdata:Metadata = {
    title:{
      default: "Abdus Samad • Web Developer Portfolio | Projects & Skills",
      template: "%s • Abdus Samad"
    },
    description:"A dynamic portfolio showcasing Abdus Samad expertise in web development, creative projects, and innovative solutions using modern technologies",
    creator:myName,
    keywords:"abdus,samad,portfolio,project,blog,latest,delhi,india",
    alternates:{
      canonical:baseUrl,
    },
    authors:{
 name:myName,
 url:baseUrl
    },
    generator:"Nextjs 15",
    robots:{
        index:true,
        follow:true,
        "max-image-preview":"large",
        "max-snippet": -1, 
        "max-video-preview": -1, 
    },
    publisher:myName,
    referrer:"no-referrer-when-downgrade",
    
 }

// export const projectTags = ["web development", "graphic design", "frontend", "backend", "mobile application", "seo"];
// export const projects = [
//     {
//         title: "ENIGMA",
//         slug: "enigma",
//         tags: ["seo", "web development", "graphic design", "frontend", "backend"],
//         image: "https://enigma.jimsd.org/opengraph-image.png",
//         content: `
//           ENIGMA is a platform designed to bring together advanced technologies and user-friendly experiences. It offers an intuitive interface for users to interact with complex systems, with an emphasis on responsive design. The project also includes SEO optimization, ensuring that the platform reaches a wider audience. This full-stack project incorporates both frontend and backend development, making use of cutting-edge technologies such as React and Node.js to ensure performance and scalability.
//         `,
//         date: "2024-08-10",
//         link: "https://enigma.jimsd.org",
//         description:
//             "ENIGMA is an advanced project focused on building an intuitive platform with SEO optimization and full-stack integration.",
//         status: "Completed",
//         technologies: ["React", "Node.js", "Tailwind CSS", "MongoDB", "SEO"]
//     }, {
//         title: "CYNET",
//         slug: "cynet",
//         tags: ["web development", "frontend", "backend", "seo"],
//         image: "https://cynet.jimsd.org/opengraph-image.jpeg?3e0116685a32806d",
//         content: `
//   CYNET is the official website for JIMS Vasant Kunj's Enigma Club's annual fest. This platform serves as a seamless gateway for users to explore and register for multiple exciting events happening during the fest. The website features a stunning UI designed for an engaging user experience, with responsive layouts and effortless navigation. Leveraging cutting-edge technologies, CYNET ensures a flawless and secure registration process for participants while maintaining scalability and performance. The integration of SEO tools ensures high visibility, attracting more attendees to the fest. CYNET showcases the perfect blend of design, functionality, and performance.
//   `,
//         date: "2024-02-15",
//         link: "https://cynet.jimsd.org",
//         description: "CYNET is the annual fest website for Enigma Club, enabling flawless event registrations with a beautiful UI.",
//         status: "Completed",
//         technologies: ["Next.js 14", "Tailwind CSS", "MongoDB", "Vercel", "Google Search Console"]
//     },
//     {
//         title: "PointUp",
//         slug: "pointup",
//         tags: ["web development", "frontend"],
//         image: "https://pointup.vercel.app/opengraph-image.png",
//         content: `
//           PointUp is a modern frontend project built with Next.js, TypeScript, Tailwind CSS, DaisyUI, and Framer Motion. It features a sleek, responsive design with dynamic animations, offering users an engaging and interactive experience. This project showcases the effective use of design systems and motion libraries, emphasizing usability and performance. With its clean architecture, PointUp is a benchmark for modern web development practices.
//         `,
//         date: "2024-08-01",
//         link: "https://pointup.vercel.app",
//         description:
//             "PointUp is a modern frontend project built with cutting-edge technologies, offering a sleek design and engaging user experience.",
//         status: "Completed",
//         technologies: [
//             "Next.js",
//             "TypeScript",
//             "Tailwind CSS",
//             "DaisyUI",
//             "Framer Motion"
//         ]
//     },
//     {
//         title: "Johanna Beauty Salon",
//         slug: "johanna-beauty-salon",
//         tags: ["web development", "frontend", "backend"],
//         image: "https://johannabeauty.vercel.app/opengraph-image.png",
//         content: `
//           Johanna Beauty Salon is a dynamic website tailored for a women's salon, designed to provide a seamless and user-friendly platform for showcasing services, managing bookings, and improving customer engagement. The website features an elegant design with responsive layouts and interactive elements to enhance the user experience. It includes a real-time appointment scheduling system, service galleries, and client testimonials. Built with modern web technologies, the site ensures performance, scalability, and ease of maintenance.
//         `,
//         date: "2024-05-20",
//         link: "https://johannabeautysalon.vercel.app",
//         description:
//             "A dynamic website for a women's salon with online appointment booking, service galleries, and a modern, elegant design.",
//         status: "Completed",
//         technologies: ["Next.js", "Tailwind CSS", "MongoDB", "Node.js", "Framer Motion"]
//     },
//     {
//         title: "Virtual Tour for JIMS College",
//         slug: "virtual-tour-jims-college",
//         tags: ["web development", "frontend"],
//         image: "https://images.pexels.com/photos/211122/pexels-photo-211122.jpeg",
//         content: `
//           The Virtual Tour for JIMS College is an interactive website designed to provide a fully immersive experience for prospective students and visitors. This platform showcases the college campus, infrastructure, and facilities through a dynamic and user-friendly interface. Features include 360-degree panoramic views, clickable hotspots for detailed descriptions, and a guided navigation system. The project aims to enhance engagement and provide an accessible way for users to explore the campus remotely. 
//           Built with cutting-edge technologies like **Vista 3D**, the platform ensures high-quality 3D visualizations, responsiveness, fast performance, and ease of use across devices.
//         `,
//         date: "2024-03-15",
//         link: "/under-development",
//         description:
//             "An interactive virtual tour platform for JIMS College, offering a 360-degree campus exploration experience with guided navigation.",
//         status: "In Progress",
//         technologies: ["React", "Vista 3D", "Tailwind CSS"]
//     },
//     {
//         title: "DTC Fake Ticket Generator",
//         slug: "dtc-fake-ticket-generator",
//         tags: ["mobile application"],
//         image: "https://placehold.co/600x400",
//         content: `
//           The **DTC Fake Ticket Generator** is a mobile app designed for generating mock Delhi Transport Corporation (DTC) bus tickets. This project was created using **React Native Expo** to allow users to generate customizable fake bus tickets for demonstration purposes. It features a simple user interface with input fields for various ticket details such as route number, fare, and date. The generated ticket is styled similarly to real DTC tickets, providing a realistic representation.
//           This app is meant for educational or demonstration purposes only and is not intended for illegal or malicious use.
//         `,
//         date: "2024-05-10",
//         link: "/not-found",
//         description:
//             "A mobile app for generating customizable fake DTC bus tickets, built with React Native Expo for cross-platform compatibility.",
//         status: "Completed",
//         technologies: ["React Native", "Expo"]
//     },
//     {
//         title: "Chhota Link",
//         slug: "chhota-link",
//         tags: ["web development", "frontend", "backend"],
//         image: "https://chhota-link.vercel.app/opengraph-image.png",
//         content: `
//           **Chhota Link** is a URL shortening service that allows users to shorten long URLs into compact, shareable links. This project was built to offer a simple and fast way to generate short links for long URLs. The web app provides users with the ability to shorten links, track their usage, and customize the generated short links. The backend is powered by a Node.js server, while the frontend is built using **Next.js 15** to provide a seamless and responsive user experience. 
//           The project includes analytics to track how often a short link is accessed and provides a simple dashboard for users to manage their shortened links.
//         `,
//         date: "2024-06-15",
//         link: "https://chhota-link.vercel.app",
//         description:
//             "A URL shortening service with customizable and trackable links, built with Next.js 15 and Node.js.",
//         status: "Completed",
//         technologies: ["Next.js 15", "Node.js", "MongoDB"]
//     },
//     {
//         title: "PORTFOLIO WEBSITE",
//         slug: "portfolio-website",
//         tags: ["web development", "frontend", "backend", "graphic design"],
//         image: `http://localhost:3000/opengraph-image.png`,
//         content: `
//   The PORTFOLIO WEBSITE project showcases my personal work, including web development, design projects, and other creative endeavors. The site was built with Next.js for fast rendering, ensuring an optimized user experience. It features a clean, minimalist design that puts the focus on my projects. I incorporated a blog section for sharing insights and updates about my work. The design is responsive, adapting seamlessly across mobile and desktop devices, and includes smooth animations using Framer Motion for interactive elements.
//   `,
//         date: "2024-06-30",
//         link: "https://portfolio.example.com",
//         description: "A personal portfolio website to showcase web development, design work, and creative projects.",
//         status: "Completed",
//         technologies: ["Next.js", "Tailwind CSS", "Framer Motion"]
//     },
//     {
//         title: "Timeless Topics",
//         slug: "timeless-topics",
//         tags: ["web development", "frontend", "backend", "seo"],
//         image: "https://timelesstopics.online/og",
//         content: `
//           **Timeless Topics** is a personal blog website that focuses on sharing insightful and evergreen content across a variety of categories. The website provides detailed posts on a wide range of subjects, with each post designed to offer long-term value to readers. Built using **Next.js**, the site ensures optimal performance and SEO for better visibility on search engines. 
//           The platform includes dynamic categorization, an easy-to-use content management system, and personalized post pages, making it easy for visitors to navigate and find valuable articles. 
//           The blog is designed with responsive layouts and clean, minimalistic styling, emphasizing the readability and engagement of the content.
//         `,
//         date: "2024-08-17",
//         link: "https://timelesstopics.online",
//         description:
//             "A personal blog website focused on evergreen content across diverse categories, built with Next.js for optimal performance and SEO.",
//         status: "Completed",
//         technologies: ["Next.js", "Tailwind CSS", "MongoDB", "Vercel"]
//     }];


// export const blogPosts = [
//     {
//         title: "Mastering Web Development with React",
//         slug: "mastering-web-development-with-react",
//         date: "2024-11-25",
//         summary: "Learn the essential skills for building dynamic and scalable applications using React.",
//         category: "Web Development",
//         image: "https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fo6in6n6b3oc1pzl8hrp1.jpg",
//         link: "/blog/web-development/mastering-web-development-with-react",
//         content: `
//             # Mastering Web Development with React
    
//             React has revolutionized the way web developers build dynamic and scalable applications. As a powerful JavaScript library developed by Facebook, React allows you to create reusable components that enhance both the speed and efficiency of your applications.
    
//             ## Why Choose React for Web Development?
    
//             - **Component-Based Architecture**: React’s component-based structure makes it easy to build and maintain large applications by breaking them into smaller, reusable parts.
//             - **Virtual DOM**: The virtual DOM improves app performance by efficiently updating and rendering only the components that have changed.
//             - **Ecosystem**: React’s extensive ecosystem includes libraries like Redux, React Router, and more, which simplify state management, routing, and other functionalities.
    
//             ## Getting Started with React
    
//             To begin, install React using your preferred package manager:
    
//             \`\`\`bash
//             npx create-react-app my-app
//             cd my-app
//             npm start
//             \`\`\`
    
//             Start by creating components and passing props to make your application interactive. Learn about state and hooks like \`useState\` and \`useEffect\` to manage dynamic data and side effects.
    
//             ## Conclusion
    
//             Mastering React requires practice and understanding its core concepts. Whether you’re building small projects or large-scale applications, React provides the tools to succeed in modern web development.
//             `
//     },
//     {
//         title: "Designing Engaging User Interfaces with Tailwind CSS",
//         slug: "designing-engaging-user-interfaces-with-tailwind-css",
//         date: "2024-11-20",
//         summary: "A comprehensive guide to creating beautiful and responsive UIs with Tailwind CSS.",
//         category: "Design",
//         image: "https://railsdesigner.com/images/posts/tips-for-developers.jpg",
//         link: "/blog/design/designing-engaging-user-interfaces-with-tailwind-css",
//         content: `
//             # Designing Engaging User Interfaces with Tailwind CSS
    
//             Tailwind CSS is a utility-first CSS framework that enables developers to create stunning user interfaces quickly and efficiently. By using pre-defined classes, you can design responsive and visually appealing UIs without writing custom CSS from scratch.
    
//             ## Benefits of Using Tailwind CSS
    
//             - **Speed and Efficiency**: With its utility classes, you can style elements directly in your HTML or JSX, reducing the need for complex CSS files.
//             - **Customizability**: Tailwind offers a highly customizable configuration file, allowing you to define colors, spacing, and other design tokens to match your brand.
//             - **Responsive Design**: Tailwind’s built-in responsive utilities make it easy to adapt your designs to various screen sizes.
    
//             ## Example: Creating a Card Component
    
//             Here’s a simple card component using Tailwind CSS:
    
//             \`\`\`jsx
//             <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg p-6">
//               <h2 className="text-2xl font-bold text-gray-800">Card Title</h2>
//               <p className="mt-4 text-gray-600">This is a sample card component styled with Tailwind CSS.</p>
//             </div>
//             \`\`\`
    
//             ## Conclusion
    
//             Tailwind CSS streamlines the design process and empowers developers to focus on creativity. Its utility-first approach makes it a must-have tool for modern web development.
//             `
//     },
//     {
//         title: "Building Mobile Apps with React Native",
//         slug: "building-mobile-apps-with-react-native",
//         date: "2024-11-15",
//         summary: "Step-by-step guide to building cross-platform mobile applications using React Native.",
//         category: "Mobile Development",
//         image: "https://miro.medium.com/v2/resize:fit:828/format:webp/1*DppZWFvuWp2S7PbzFCtMKA.png",
//         link: "/blog/mobile-development/building-mobile-apps-with-react-native",
//         content: `
//             # Building Mobile Apps with React Native
    
//             React Native is a popular framework for building cross-platform mobile applications using JavaScript. Developed by Facebook, it allows you to create apps for both iOS and Android from a single codebase.
    
//             ## Why Use React Native?
    
//             - **Cross-Platform Development**: Save time and resources by writing one codebase for multiple platforms.
//             - **Native Performance**: React Native bridges JavaScript code to native modules, ensuring smooth and fast performance.
//             - **Rich Ecosystem**: With a wide range of libraries and community support, React Native simplifies mobile development.
    
//             ## Example: Creating a Simple App
    
//             Install the React Native CLI and create a new project:
    
//             \`\`\`bash
//             npx react-native init MyApp
//             cd MyApp
//             npx react-native run-android # or run-ios
//             \`\`\`
    
//             Start building your app by defining components and using React Native’s built-in components like \`View\`, \`Text\`, and \`Image\`.
    
//             ## Conclusion
    
//             React Native empowers developers to build high-quality mobile apps efficiently. Its versatility and strong community make it a go-to choice for modern app development.
//             `
//     },
//     {
//         title: "SEO Strategies for Boosting Your Website's Visibility",
//         slug: "seo-strategies-for-boosting-your-websites-visibility",
//         date: "2024-11-10",
//         summary: "Discover the best SEO techniques to improve your website's search engine ranking.",
//         category: "SEO",
//         image: "https://api.backlinko.com/app/uploads/2021/10/backlinko-organic-traffic-september-2021-960x487.webp",
//         link: "/blog/seo/seo-strategies-for-boosting-your-websites-visibility",
//         content: `
//         # SEO Strategies for Boosting Your Website's Visibility

//         Search Engine Optimization (SEO) is critical for increasing your website’s visibility and driving organic traffic. Implementing effective SEO strategies can enhance your search rankings and make your site more discoverable.

//         ## Key SEO Strategies

//         - **Keyword Research**: Use tools like Google Keyword Planner to identify high-ranking keywords relevant to your content.
//         - **Quality Content**: Create engaging, informative, and unique content that addresses your audience's needs.
//         - **On-Page Optimization**: Optimize meta titles, descriptions, and headings. Use keywords naturally without overstuffing.
//         - **Mobile-Friendly Design**: Ensure your website is responsive and offers a seamless experience across devices.

//         ## Tools for SEO Success

//         Tools like Google Analytics, SEMrush, and Ahrefs can help you track your performance and identify areas for improvement. Regularly audit your site to ensure technical SEO issues are resolved promptly.

//         ## Conclusion

//         SEO is a long-term investment, but with consistent effort, it can significantly boost your website’s visibility and success.
//         `
//     },
//     {
//         title: "The Importance of Responsive Web Design",
//         slug: "the-importance-of-responsive-web-design",
//         date: "2024-11-05",
//         summary: "Understand why responsive design is crucial for delivering a seamless user experience.",
//         category: "Web Development",
//         image: "https://cdn.prod.website-files.com/62b33d4be1f1d9e3d9bb1e64/643e8d5e0e0a0141685216c4_Why%20Responsive%20Web%20Design%20is%20Important-p-1600.jpg",
//         link: "/blog/web-development/the-importance-of-responsive-web-design",
//         content: `
//         # The Importance of Responsive Web Design

//         Responsive web design ensures your website adapts seamlessly to different screen sizes and devices, offering a consistent user experience.

//         ## Benefits of Responsive Design

//         - **Enhanced User Experience**: A responsive design eliminates the need for zooming and scrolling, improving usability.
//         - **SEO Advantage**: Search engines like Google prioritize mobile-friendly websites, boosting your rankings.
//         - **Cost-Effective**: Maintaining one responsive site is more efficient than creating separate designs for different devices.

//         ## Tips for Building Responsive Websites

//         - Use CSS frameworks like Bootstrap or Tailwind CSS for grid-based layouts.
//         - Implement flexible images and media queries to adjust content dynamically.
//         - Test your website on various devices to ensure consistent performance.

//         ## Conclusion

//         As mobile usage grows, responsive design has become essential for reaching and engaging audiences effectively.
//         `
//     },
//     {
//         title: "Enhancing User Experience with Figma Prototyping",
//         slug: "enhancing-user-experience-with-figma-prototyping",
//         date: "2024-10-30",
//         summary: "Learn how to use Figma to create interactive prototypes that enhance user experiences.",
//         category: "Design",
//         image: "https://curiouscore.com/wp-content/uploads/2024/03/sigmund-0s43f-8Dz_0-unsplash-1400x700.jpg",
//         link: "/blog/design/enhancing-user-experience-with-figma-prototyping",
//         content: `
//         # Enhancing User Experience with Figma Prototyping

//         Figma is a versatile tool for designers to create interactive prototypes that bring ideas to life and streamline the design process.

//         ## Why Use Figma for Prototyping?

//         - **Collaboration**: Figma allows multiple users to work on the same file simultaneously, fostering teamwork.
//         - **Interactive Elements**: Add animations, transitions, and clickable buttons to simulate real user experiences.
//         - **Cross-Platform Access**: Access your projects on any device without installing software.

//         ## Example Workflow

//         1. Create a design layout using Figma’s intuitive tools.
//         2. Link screens together to define user flows.
//         3. Add interactions to test how users navigate your prototype.

//         ## Conclusion

//         Figma prototyping bridges the gap between design and development, helping you create user-centered products efficiently.
//         `
//     },
//     {
//         title: "Introduction to Backend Development with Node.js",
//         slug: "introduction-to-backend-development-with-nodejs",
//         date: "2024-10-25",
//         summary: "A beginner's guide to building scalable and efficient backend services with Node.js.",
//         category: "Backend Development",
//         image: "https://cdn.careerfoundry.com/en/wp-content/uploads/2022/01/Nodejs_opens_up_the_backend_to_javascript.webp",
//         link: "/blog/backend-development/introduction-to-backend-development-with-nodejs",
//         content: `
//         # Introduction to Backend Development with Node.js

//         Node.js is a runtime environment that allows developers to run JavaScript on the server, enabling the creation of scalable backend systems.

//         ## Why Node.js?

//         - **Event-Driven Architecture**: Ideal for handling real-time applications like chat apps and online games.
//         - **JavaScript Everywhere**: Use JavaScript for both frontend and backend development.
//         - **Extensive Ecosystem**: npm provides access to thousands of libraries for added functionality.

//         ## Basic Example

//         Here’s a simple Node.js server:

//         \`\`\`javascript
//         const http = require('http');
//         const server = http.createServer((req, res) => {
//           res.end('Hello, World!');
//         });
//         server.listen(3000, () => console.log('Server running on port 3000'));
//         \`\`\`

//         ## Conclusion

//         Node.js simplifies backend development and is widely used for building modern web applications.
//         `
//     },
//     {
//         title: "Building Your First E-commerce Website",
//         slug: "building-your-first-ecommerce-website",
//         date: "2024-10-20",
//         summary: "Step-by-step tutorial on how to create a fully functional e-commerce website from scratch.",
//         category: "Web Development",
//         image: "https://images.ctfassets.net/wowgx05xsdrr/66YjKpWmBsUmQCAE6qjMGq/31194926e2f9974fbf6f3f9344857312/performance-marketing-hero-img.png?fm=webp&w=3840&q=75",
//         link: "/blog/web-development/building-your-first-ecommerce-website",
//         content: `
//         # Building Your First E-commerce Website

//         Creating an e-commerce website can seem daunting, but with the right approach, you can have a functional store up and running in no time.

//         ## Steps to Build an E-commerce Site

//         1. **Plan Your Features**: Decide on the essential features like product pages, a shopping cart, and payment integration.
//         2. **Choose a Tech Stack**: Use frameworks like Next.js for the frontend and Node.js for the backend.
//         3. **Integrate a Payment Gateway**: Use platforms like Stripe or PayPal for secure transactions.

//         ## Tips for Success

//         - Ensure your website is mobile-friendly.
//         - Focus on performance to reduce load times.
//         - Implement SEO strategies to attract more visitors.

//         ## Conclusion

//         Building an e-commerce website is an excellent way to showcase your products and reach a global audience.
//         `
//     },
//     {
//         title: "Optimizing Web Performance for Faster Load Times",
//         slug: "optimizing-web-performance-for-faster-load-times",
//         date: "2024-10-15",
//         summary: "Learn practical strategies for improving web performance and reducing load times.",
//         category: "Web Development",
//         image: "https://www.webfx.com/wp-content/uploads/2021/10/Screenshot_28-2.png",
//         link: "/blog/web-development/optimizing-web-performance-for-faster-load-times",
//         content: `
//         # Optimizing Web Performance for Faster Load Times

//         Faster load times improve user satisfaction and boost conversion rates. Here are strategies to enhance your website's performance.

//         ## Strategies for Web Optimization

//         - **Minify Resources**: Reduce the size of CSS, JavaScript, and HTML files.
//         - **Lazy Loading**: Load images and videos only when they are about to enter the viewport.
//         - **CDN Usage**: Serve assets from a Content Delivery Network (CDN) for faster delivery.

//         ## Tools for Monitoring Performance

//         Use tools like Google Lighthouse and GTmetrix to analyze your website and identify improvement areas.

//         ## Conclusion

//         Regularly optimizing your website ensures better user experiences and improved search rankings.
//         `
//     }
// ];


