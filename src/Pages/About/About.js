import React from 'react'
import './About.css'
import Nav from '../../Components/Nav/Nav'

const About = () => {
    return (
        <div className="about">
            <div className="container">
                <Nav />
                <div className="about__snippet_container">
                    <div className="about__snippet">
                        <div className="about__snippet_header">
                            <div className="about__snippet_header-actions">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                        <div className="about__snippet-content">
                            <span className="about__snippet-bracket">{"{"}</span>
                            <div className="about__snippet-brackets-nested">
                                <span className="about__snippet-pair"><span className="about__snippet-key">"name"</span>  <span className="about__snippet-colon">:</span> <span className="about__snippet-value">"Tejas Ravishankar"</span><span className="about__snippet-comma">,</span></span>
                                <span className="about__snippet-pair"><span className="about__snippet-key">"handle"</span>  <span className="about__snippet-colon">:</span> <span className="about__snippet-value">"@XtremeDevX"</span><span className="about__snippet-comma">,</span></span>
                                <span className="about__snippet-pair"><span className="about__snippet-key">"email"</span>  <span className="about__snippet-colon">:</span> <span className="about__snippet-value">"xtremedevx@gmail.com"</span><span className="about__snippet-comma">,</span></span>
                                <span className="about__snippet-pair"><span className="about__snippet-key">"age"</span>  <span className="about__snippet-colon">:</span> <span className="about__snippet-value--num">14</span><span className="about__snippet-comma">,</span></span>
                                <span className="about__snippet-pair"><span className="about__snippet-key">"isDeveloper"</span>  <span className="about__snippet-colon">:</span> <span className="about__snippet-value--bool">true</span><span className="about__snippet-comma">,</span></span>
                                <span className="about__snippet-pair">
                                    <span className="about__snippet-key">"technologies"</span>
                                    <span className="about__snippet-colon"> : </span>
                                    <span className="about__snippet-value--arr">
                                        <span className="about__snippet-array-bracket">[</span>
                                        <div className="about__snippet-array-brackets-nested">
                                            <span className="about__snippet-value">"typescript"</span><span className="about__snippet-comma">,</span> <br />
                                            <span className="about__snippet-value">"rust"</span><span className="about__snippet-comma">,</span> <br />
                                            <span className="about__snippet-value">"python"</span><span className="about__snippet-comma">,</span> <br />
                                            <span className="about__snippet-value">"react"</span><span className="about__snippet-comma">,</span> <br />
                                            <span className="about__snippet-value">"flutter"</span><span className="about__snippet-comma">,</span> <br />
                                            <span className="about__snippet-value">"git"</span><span className="about__snippet-comma">,</span> <br />
                                            <span className="about__snippet-value">"mongodb"</span><span className="about__snippet-comma">,</span> <br />
                                            <span className="about__snippet-value">"firebase"</span><span className="about__snippet-comma">,</span> <br />
                                            <span className="about__snippet-value">"realm"</span><span className="about__snippet-comma">,</span> <br />
                                            <span className="about__snippet-value">"swift"</span><span className="about__snippet-comma">,</span> <br />
                                            <span className="about__snippet-value">"node js"</span><span className="about__snippet-comma">,</span> <br />
                                            <span className="about__snippet-value">"electron"</span><span className="about__snippet-comma">,</span> <br />
                                            <span className="about__snippet-value">"flask"</span><span className="about__snippet-comma">,</span> <br />
                                            <span className="about__snippet-value">"c++"</span><span className="about__snippet-comma">,</span> <br />
                                        </div>
                                        <span className="about__snippet-array-bracket">]</span>
                                    </span>
                                    <span className="about__snippet-comma">,</span>
                                </span>
                                <span className="about__snippet-pair">
                                    <span className="about__snippet-key">"hobbies"</span>
                                    <span className="about__snippet-colon"> : </span>
                                    <span className="about__snippet-value--arr">
                                        <span className="about__snippet-array-bracket">[</span>
                                        <div className="about__snippet-array-brackets-nested">
                                            <span className="about__snippet-value">"tennis"</span><span className="about__snippet-comma">,</span> <br />
                                            <span className="about__snippet-value">"gaming"</span><span className="about__snippet-comma">,</span>
                                        </div>
                                        <span className="about__snippet-array-bracket">]</span>
                                    </span>
                                    <span className="about__snippet-comma">,</span>
                                </span>
                                <span className="about__snippet-pair"><span className="about__snippet-key">"favoriteProject"</span>  <span className="about__snippet-colon">:</span> <span className="about__snippet-value">"electric package manager"</span><span className="about__snippet-comma">,</span></span>
                                <span className="about__snippet-pair"><span className="about__snippet-key">"favoriteFood"</span>  <span className="about__snippet-colon">:</span> <span className="about__snippet-value">"nutella crepes"</span><span className="about__snippet-comma">,</span></span>
                            </div>
                            <span className="about__snippet-bracket">{"}"}</span>
                        </div>
                    </div>
                </div>
                {/* <h1 className="about__title">Technologies</h1>
                <div className="about__technologies">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/768px-Python-logo-notext.svg.png" alt="Python" className="about__technology" />
                    <img src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" alt="Git" className="about__technology" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/GitLab_Logo.svg/1200px-GitLab_Logo.svg.png" alt="GitLab" className="about__technology" />
                    <img src="https://img.icons8.com/color/452/mongodb.png" alt="Mongo Db" className="about__technology" />
                    <img src="https://iconape.com/wp-content/files/gu/371380/svg/371380.svg" alt="Realm" className="about__technology" />
                    <img src="https://cdn4.iconfinder.com/data/icons/logos-3/504/Swift-2-512.png" alt="Swift" className="about__technology" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1280px-React-icon.svg.png" alt="React" className="about__technology" />
                    <img src="https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png" alt="Node JS" className="about__technology" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/1200px-ISO_C%2B%2B_Logo.svg.png" alt="C++" className="about__technology" />
                    <img src="https://cdn.iconscout.com/icon/free/png-512/html5-10-569380.png" alt="HTML 5" className="about__technology" />
                    <img src="https://coryrylan.com/assets/images/posts/types/css.svg" alt="CSS 3" className="about__technology" />


                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png" alt="Typescript" className="about__technology" />
                    <img src="https://cdn.iconscout.com/icon/free/png-256/javascript-2752148-2284965.png" alt="Javascript" className="about__technology" />
                    <img src="https://betanews.com/wp-content/uploads/2018/05/electron.jpg" alt="Electron" className="about__technology" />
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiHinhMmzh0arFb7wi77IMvdRbqy8na8ZU2AR6wQQcAJIgXUINz7y5uyWTMryfkP2eRDQ&usqp=CAU" alt="Firebase" className="about__technology" />
                    <img src="https://authy.com/wp-content/uploads/npm-logo.png" alt="NPM" className="about__technology" />
                    <img src="https://ih1.redbubble.net/image.268564051.6043/st,small,507x507-pad,600x600,f8f8f8.jpg" alt="Yarn" className="about__technology" />
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQprYdebuGjpDHnU5L4QZOI5ZrqyWmHIRjSBdq5ABi5Z_gcdnP_AgRtLEAsdwuokyhCGtU&usqp=CAU" alt="Express" className="about__technology" />
                    <img src="https://d2908q01vomqb2.cloudfront.net/ca3512f4dfa95a03169c5a670a4c91a19b3077b4/2019/09/20/rust-social-wide.jpg" alt="Rust" className="about__technology" />
                    <img src="https://res.cloudinary.com/teepublic/image/private/s--lxNXHPN3--/c_fit,g_north_west,h_840,w_679/co_ffffff,e_outline:40/co_ffffff,e_outline:inner_fill:1/co_ffffff,e_outline:40/co_ffffff,e_outline:inner_fill:1/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_jpg,h_630,q_90,w_630/v1585726530/production/designs/8796655_0.jpg" alt="Flutter" className="about__technology" />

                </div> */}
            </div>
        </div>
    )
}

export default About
