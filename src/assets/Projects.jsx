function Project(){
    return (
        <section id="projects">
            <h3>Projects</h3>

            <div className="inner">
                <div className="description">
                    <h6>3D crypto orderbook visualizer</h6>
                    <p>July 2025</p>
                    <a href="https://github.com/skrsumit250/Orderbook_Visualizer">Github link</a>
                    <br></br><br></br>
                    <div>
                        <ul>
                            <li> Developed a web-based 3D visualization tool for real-time and historical crypto orderbook data using Next.js, TypeScript, and Three.js.</li>
                            <li>Implemented real-time and historical depth plotting across Binance, OKX, BitMEX, and Kraken with interactive 3D controls (rotate, zoom, pan).</li>
                            <li>Built modular exchange/symbol support, intuitive UI selectors, and extensible architecture for cross-venue liquidity visualization.</li>
                        </ul>                
                    </div>
                </div>
            </div>

            <br></br>
            <div className="inner">
                <div className="description">
                    <h6>ML Model for miRNA Target Prediction & Comparative Analysis</h6>
                    <p>Research project under Prof. Kusum K Singh, IIT Guwahati</p>
                    <p>Jan 2025- Mar. 2025</p>
                    <a href="https://github.com/skrsumit250/miRNA-Target-Prediction-and-Comparative-Analysis">Github link</a>
                    <br></br><br></br>
                    <div>
                        <ul>
                            <li>Developed a machine learning powered web framework integrating Support Vector Regression (SVR) for accurate microRNA (miRNA) target prediction and comparative sequence analysis.</li>
                            <li>Engineered advanced features including seed region matching, GC content, and RNA duplex binding energy to enhance miRNA-target interaction scoring and novel target discovery.</li>
                            <li>Built an interactive React.js interface with automated CSV export, improving user accessibility and research workflow efficiency for gene regulation studies.</li>
                        </ul>                
                    </div>
                </div>
            </div>

            <br></br>
            <div className="inner">
                <div className="description">
                    <h6>Biosciences and Bioengineering Alumni Page</h6>
                    <p>Oct 2024</p>
                    <a href="https://iitg.ac.in/biotech/alumni_page/">Website link</a>
                    <br></br><br></br>
                    <div>
                        <ul>
                            <li>Developed a full-stack Alumni Page for the Biosciences and Bioengineering Department using React.js, Node.js, MongoDB, and Firebase/Azure Authentication.</li>
                            <li>Designed the MongoDB database and built a searchable directory with filters (year, name, email, domain).Added an event showcase functionality to highlight departmental activities like Alumni Meet.</li>
                            <li> Implemented secure Google/Outlook login (restricted to college IDs) and enabled users to create and edit profiles.</li>
                        </ul>                
                    </div>
                </div>
            </div>
            <br></br>
            <div className="inner">
                <div className="description">
                    <h6>Medlog</h6>
                    <p>July 2024</p>
                    <a href="https://github.com/MedLog-Org/MedLog">Github link</a>
                    <br></br><br></br>
                    <div>
                        <ul>
                            <li>Built a full-stack web app using the MERN stack, enabling patients to register, book, and manage appointments with doctors through a user-friendly interface.</li>
                            <li>Utilized MongoDB for database design and efficient storage and retrieval of appointment and user data, enhancing service efficiency and appointment history tracking.</li>
                            <li>Integrated Firebase Authentication to ensure secure and seamless login experiences for both doctors and patients.</li>
                        </ul>                
                    </div>
                </div>
            </div>
            <br></br>
            <div className="inner">
                <div className="description">
                    <h6>Job Portal</h6>
                    <p>July 2024</p>
                    <a href="https://github.com/skrsumit250/Encryptix_Job_Portal">Github link</a>
                    <br></br><br></br>
                    <div>
                        <ul>
                            <li>Developed a full-stack web app on MERN stack, offering intuitive job search and application management.</li>
                            <li>Managed data with MongoDB, ensuring reliable storage and retrieval, hosted on Vercel for performance.</li>
                            <li>Enhanced user experience with advanced search, streamlined applications, and efficient job postings.</li>
                        </ul>                
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Project;