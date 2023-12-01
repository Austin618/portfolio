import React, {useState} from "react";

import "./home.css";

import '@fortawesome/fontawesome-free/css/all.css';
import Navbar from "../../component/navbar/navbar";
import Float from "../../component/float/float";
import Footnote from "../../component/footnote/footnote";
import Clock from "../../component/clock/clock";
import Cards from "../../component/cards/cards";
import Line from "../../component/line/line";
import Language from "../../component/language/language";


const Home = () => {

    // currentLanguage = 0 en // 1 jp // 2 cn
    const [currentLanguage, setCurrentLanguage] = useState(0);

    let welcome1, welcome2, sub, experience, projects, skills, about,
        experienceContent, projectsContent, skillsContent, aboutContent;

    switch (currentLanguage) {
        case 0:
            welcome1 = "Welcome to";
            welcome2 = "Austin(Qiming) Ye's Portfolio";
            sub = "A full stack developer";
            experience = "Experience";
            projects = "Projects";
            skills = "Skills";
            about = "About";
            experienceContent = [
                <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <h3 style={{ display: 'inline-block' }}>Software Engineer Intern</h3>
                        <p style={{ display: 'inline-block', textAlign: 'right' }}>Toronto, ON (Remote)</p>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <p style={{ display: 'inline-block', fontStyle: 'italic' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ReactNative, AWS(Amplify, DynamoDB, S3, Cognito)</p>
                        <p style={{ display: 'inline-block', textAlign: 'right' }}>May. 2023 ~ Aug. 2023</p>
                    </div>

                    <p>Develop for Good/Louisiana Husky Rescue Organization Homepage: <a className="linkTo" href="http://louisianahuskyrescue.com/" target="_blank" rel="noopener noreferrer">Link</a></p>

                    <p>&nbsp;&nbsp; • Contributed to the development through the creation of the "petOffenders" app.</p>
                    <p>&nbsp;&nbsp; • Enhanced user experience by implementing features for reporting abuse/missing pets, checking abuse/missing areas on the map, and searching for "at-risk" individuals.</p>
                    <p>&nbsp;&nbsp; • Developed GraphQL APIs catering to diverse user privileges, including administration pages and specialized report/map features for registered users.</p>
                </div>,<br />,

                <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <h3 style={{ display: 'inline-block' }}>Software Engineer Intern</h3>
                        <p style={{ display: 'inline-block', textAlign: 'right' }}>Toronto, ON (Remote)</p>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <p style={{ display: 'inline-block', fontStyle: 'italic' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ReactNative, AWS(Amplify, DynamoDB, S3, Cognito)</p>
                        <p style={{ display: 'inline-block', textAlign: 'right' }}>Jan. 2022 ~ Apr. 2022</p>
                    </div>

                    <p style={{ display: 'inline-block' }}>TAPP Homepage: <a className="linkTo" href="https://theteacherapp.ca/" target="_blank" rel="noopener noreferrer">Link</a></p>

                    <p>&nbsp;&nbsp; • Contributed to internal application for educators, focused on addressing mental health issues for teachers.</p>
                    <p>&nbsp;&nbsp; • Played a key role in building RESTful APIs for both the iOS app and web app, integrating cookie-session-based authentication, OAuth2.0 (PassportJS) for authorization, and bcrypt for password salting and hashing.</p>
                    <p>&nbsp;&nbsp; • Implemented functionalities such as search, news checking, chat features, and message notifications on the app, while also enabling administrators to manage services and update account information on the web platform.</p>
                </div>
            ];
            projectsContent = [
                <div className="project">
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <h3 style={{ display: 'inline-block' }}>Currency Exchange Platform</h3>
                        <p style={{ display: 'inline-block', textAlign: 'right' }}>Feb. 2023</p>
                    </div>

                    <p style={{ fontStyle: 'italic' }}>&nbsp;&nbsp;&nbsp;Java(Spring Boot, Spring Cloud), Docker, Google Kubernetes Engine(GKE)</p>

                    <p>&nbsp;&nbsp; • Created microservices for currency exchange rate service and currency conversion service</p>
                    <p>&nbsp;&nbsp; • Leveraged Google Kubernetes Engine(GKE) for seamless service uptime, ensuring continuous operation without downtime.</p>

                    <button className="view" onClick={() => window.open('https://github.com/Austin618/SpringBoot_Microservices_Kubernetes', '_blank')}>
                        View Repository <p className="arrow"></p>
                    </button>
                </div>,<br />,

                <div className="project">
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <h3 style={{ display: 'inline-block' }}>Interactive Blog System</h3>
                        <p style={{ display: 'inline-block', textAlign: 'right' }}>Dec. 2022</p>
                    </div>

                    <p style={{ fontStyle: 'italic' }}>&nbsp;&nbsp;&nbsp;Java(Spring Boot, Spring Security), MySQL, AWS(Elastic Beanstalk, RDS)</p>

                    <p>&nbsp;&nbsp; • Established a dynamic blog communication service allowing users to create, post, and comment on blogs.</p>
                    <p>&nbsp;&nbsp; • Implemented JWT authentication for secure access and utilized the Data Transfer Object (DTO) design pattern for effective data handling.</p>

                    <button className="view" onClick={() => window.open('https://github.com/Austin618/Blog_System', '_blank')}>
                        View Repository <p className="arrow"></p>
                    </button>
                </div>,<br />,

                <div className="project">
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <h3 style={{ display: 'inline-block' }}>TikTok Tag Analyzer</h3>
                        <p style={{ display: 'inline-block', textAlign: 'right' }}>Oct. 2022</p>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <p style={{ fontStyle: 'italic' }}>&nbsp;&nbsp;&nbsp;VueJS, Flask, MongoDB, Heroku, Sentry</p>
                        <p style={{ display: 'inline-block', textAlign: 'right' }}>Team of 6</p>
                    </div>

                    <p>&nbsp;&nbsp; • Created a system using third-party TikTok APIs for tag generation and influencer recommendation.</p>
                    <p>&nbsp;&nbsp; • Provided influencers with customized tags and recommended influencers to advertisers, enhancing marketing strategies.</p>

                    <button className="view" onClick={() => window.open('https://github.com/Austin618/TikTok_influencers_tags', '_blank')}>
                        View Repository <p className="arrow"></p>
                    </button>
                </div>,<br />,

                <div className="project">
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <h3 style={{ display: 'inline-block' }}>YouTube Keywords Recommendation System</h3>
                        <p style={{ display: 'inline-block', textAlign: 'right' }}>Sep. 2022</p>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <p style={{ fontStyle: 'italic' }}>&nbsp;&nbsp;&nbsp;ReactJS, ExpressJS, Heroku, Docker</p>
                        <p style={{ display: 'inline-block', textAlign: 'right' }}>Team of 3</p>
                    </div>

                    <p>&nbsp;&nbsp; • Developed a real-time recommendation system utilizing YouTube's official API for channels, playlists, and video information.</p>
                    <p>&nbsp;&nbsp; • Implemented advanced string algorithms to enhance the precision of keyword recommendations.</p>

                    <button className="view" onClick={() => window.open('https://github.com/Austin618/Youtube_channels_analysis', '_blank')}>
                        View Repository <p className="arrow"></p>
                    </button>
                </div>,<br />,

                <div className="project">

                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <h3 style={{ display: 'inline-block' }}>Furniture Exchanger</h3>
                        <p style={{ display: 'inline-block', textAlign: 'right' }}>Dec. 2021</p>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <p style={{ fontStyle: 'italic' }}>&nbsp;&nbsp;&nbsp;ReactJS, ExpressJS, MongoDB, Mocha/Chai, Heroku</p>
                        <p style={{ display: 'inline-block', textAlign: 'right' }}>Team of 3</p>
                    </div>

                    <p>&nbsp;&nbsp; • Designed and implemented a user-friendly platform for searching, publishing, favoriting, and messaging regarding furniture items.</p>
                    <p>&nbsp;&nbsp; • Incorporated Mocha/Chai for testing and ensured administrative functionalities such as user management.</p>

                    <button className="view" onClick={() => window.open('https://github.com/Austin618/Furniture_exchange', '_blank')}>
                        View Repository <p className="arrow"></p>
                    </button>
                </div>
            ];
            skillsContent = [
                <div>
                    <h2>&nbsp;Language Skills</h2>
                    <p>&nbsp;&nbsp; • English</p>
                    <p>&nbsp;&nbsp; • Mandarin (Native)</p>
                    <p>&nbsp;&nbsp; • Japanese</p>

                    <h2>&nbsp;Programming Skills</h2>
                    <h3>&nbsp;&nbsp;Programming Languages</h3>
                    <p>&nbsp;&nbsp; • Java</p>
                    <p>&nbsp;&nbsp; • JavaScript</p>
                    <p>&nbsp;&nbsp; • Python</p>
                    <p>&nbsp;&nbsp; • C/C++</p>

                    <h3>&nbsp;Software Frameworks</h3>
                    <p>&nbsp;&nbsp; • <strong>Front End:</strong> React, Vue, React Native</p>
                    <p>&nbsp;&nbsp; • <strong>Back End:</strong> Java (Spring Boot, Spring Security, Spring Cloud); NodeJS (ExpressJS); Python (Flask, Django)</p>
                    <p>&nbsp;&nbsp; • <strong>Testing:</strong> Java (JUnit); NodeJS (Mocha/Chai); Python (Pytest)</p>

                    <h3>&nbsp;Databases</h3>
                    <p>&nbsp;&nbsp; • <strong>SQL:</strong> MySQL, PostgreSQL</p>
                    <p>&nbsp;&nbsp; • <strong>NoSQL:</strong> MongoDB, DynamoDB, Redis</p>

                    <h3>&nbsp;Cloud Platforms</h3>
                    <p>&nbsp;&nbsp; • AWS, GCP, Heroku</p>

                    <h3>&nbsp;Tools</h3>
                    <p>&nbsp;&nbsp; • Git, CI/CD, Docker, Kubernetes, Sentry (Production deployment monitoring)</p>
                    <h2>&nbsp;Data Structures, Algorithms and Operating System</h2>
                </div>
            ];
            aboutContent = [
                <div>
                    &nbsp;&nbsp;&nbsp;&nbsp;I hold an Honors Bachelor of Science with Distinction in Computer Science
                    Specialist from the University of Toronto in 2023. I've participated in two internships,
                    last January's was with a Canadian startup and this May was with a non-profit organization
                    in the US. I follow tech news regularly, and like to develop and explore interesting things.
                </div>
            ];
            break;
        case 1:
            welcome1 = "ヨウケイメイの";
            welcome2 = "ポートフォリオへようこそ";
            sub = "フルスタック開発者";
            experience = "経験";
            projects = "プロジェクト";
            skills = "スキル";
            about = "について";
            experienceContent = [
                <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <h3 style={{ display: 'inline-block' }}>ソフトウェア開発インターン</h3>
                        <p style={{ display: 'inline-block', textAlign: 'right' }}>カナダオンタリオ州トロント（リモート）</p>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <p style={{ display: 'inline-block', fontStyle: 'italic' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ReactNative, AWS(Amplify, DynamoDB, S3, Cognito)</p>
                        <p style={{ display: 'inline-block', textAlign: 'right' }}>2023.5 ~ 2023.8</p>
                    </div>

                    <p>Develop for Good/Louisiana Husky Rescue Organization ホームページ: <a className="linkTo" href="http://louisianahuskyrescue.com/" target="_blank" rel="noopener noreferrer">リンク</a></p>

                    <p>&nbsp;&nbsp; • petOffendersアプリの制作を通じて開発に貢献。</p>
                    <p>&nbsp;&nbsp; • ペットの虐待・行方不明を報告する機能、虐待・行方不明地域を地図上で確認する機能、「リスクのある」個人を検索する機能を実装し、ユーザー体験を向上。</p>
                    <p>&nbsp;&nbsp; • 管理ページや登録ユーザー向けの特別なレポート/マップ機能など、多様なユーザー権限に対応するGraphQL APIを開発。</p>
                </div>,<br />,

                <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <h3 style={{ display: 'inline-block' }}>ソフトウェア開発インターン</h3>
                        <p style={{ display: 'inline-block', textAlign: 'right' }}>カナダオンタリオ州トロント（リモート）</p>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <p style={{ display: 'inline-block', fontStyle: 'italic' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ReactNative, AWS(Amplify, DynamoDB, S3, Cognito)</p>
                        <p style={{ display: 'inline-block', textAlign: 'right' }}>2022.1 ~ 2022.4</p>
                    </div>

                    <p style={{ display: 'inline-block' }}>TAPP ホームページ: <a className="linkTo" href="https://theteacherapp.ca/" target="_blank" rel="noopener noreferrer">リンク</a></p>

                    <p>&nbsp;&nbsp; • 教師のメンタルヘルス問題に焦点を当てた教育者向け社内アプリケーションに貢献。</p>
                    <p>&nbsp;&nbsp; • iOSアプリとウェブアプリの両方でRESTful APIの構築に重要な役割を果たし、クッキー・セッション・ベースの認証、認可のためのOAuth2.0（PassportJS）、パスワードのソルティングとハッシュ化のためのbcryptを統合。</p>
                    <p>&nbsp;&nbsp; • 検索、ニュースチェック、チャット機能、メッセージ通知などの機能をアプリに実装する一方、管理者がウェブプラットフォーム上でサービスの管理やアカウント情報の更新を行えるようにした。</p>
                </div>
            ];
            projectsContent = [
                <div className="project">
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <h3 style={{ display: 'inline-block' }}>為替プラットフォーム</h3>
                        <p style={{ display: 'inline-block', textAlign: 'right' }}>2023.2</p>
                    </div>

                    <p style={{ fontStyle: 'italic' }}>&nbsp;&nbsp;&nbsp;Java(Spring Boot, Spring Cloud), Docker, Google Kubernetes Engine(GKE)</p>

                    <p>&nbsp;&nbsp; • 為替レートサービスおよび通貨換算サービスのマイクロサービスを構築</p>
                    <p>&nbsp;&nbsp; • Google Kubernetes Engine(GKE)を活用し、シームレスなサービスアップタイムを実現。</p>

                    <button className="view" onClick={() => window.open('https://github.com/Austin618/SpringBoot_Microservices_Kubernetes', '_blank')}>
                        リポジトリを見る <p className="arrow"></p>
                    </button>
                </div>,<br />,

                <div className="project">
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <h3 style={{ display: 'inline-block' }}>インタラクティブなブログシステム</h3>
                        <p style={{ display: 'inline-block', textAlign: 'right' }}>2022.12</p>
                    </div>

                    <p style={{ fontStyle: 'italic' }}>&nbsp;&nbsp;&nbsp;Java(Spring Boot, Spring Security), MySQL, AWS(Elastic Beanstalk, RDS)</p>

                    <p>&nbsp;&nbsp; • ユーザーがブログを作成、投稿、コメントできるダイナミックなブログコミュニケーションサービスを確立。</p>
                    <p>&nbsp;&nbsp; • セキュアなアクセスのためにJWT認証を実装し、効果的なデータ処理のためにDTO（Data Transfer Object）デザインパターンを活用。</p>

                    <button className="view" onClick={() => window.open('https://github.com/Austin618/Blog_System', '_blank')}>
                        リポジトリを見る <p className="arrow"></p>
                    </button>
                </div>,<br />,

                <div className="project">
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <h3 style={{ display: 'inline-block' }}>TikTokタグアナライザー</h3>
                        <p style={{ display: 'inline-block', textAlign: 'right' }}>2022.10</p>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <p style={{ fontStyle: 'italic' }}>&nbsp;&nbsp;&nbsp;VueJS, Flask, MongoDB, Heroku, Sentry</p>
                        <p style={{ display: 'inline-block', textAlign: 'right' }}>6人チーム</p>
                    </div>

                    <p>&nbsp;&nbsp; • サードパーティのTikTok APIを利用して、タグ生成とインフルエンサー推薦のシステムを構築。</p>
                    <p>&nbsp;&nbsp; • インフルエンサーにカスタマイズされたタグを提供し、広告主にインフルエンサーを推薦することで、マーケティング戦略を強化。</p>

                    <button className="view" onClick={() => window.open('https://github.com/Austin618/TikTok_influencers_tags', '_blank')}>
                        リポジトリを見る <p className="arrow"></p>
                    </button>
                </div>,<br />,

                <div className="project">
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <h3 style={{ display: 'inline-block' }}>YouTubeキーワード推薦システム</h3>
                        <p style={{ display: 'inline-block', textAlign: 'right' }}>2022.9</p>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <p style={{ fontStyle: 'italic' }}>&nbsp;&nbsp;&nbsp;ReactJS, ExpressJS, Heroku, Docker</p>
                        <p style={{ display: 'inline-block', textAlign: 'right' }}>3人チーム</p>
                    </div>

                    <p>&nbsp;&nbsp; • YouTubeのチャンネル、プレイリスト、動画情報の公式APIを活用したリアルタイム・レコメンデーションシステムを開発。</p>
                    <p>&nbsp;&nbsp; • キーワード推薦の精度を高めるため、高度な文字列アルゴリズムを実装。</p>

                    <button className="view" onClick={() => window.open('https://github.com/Austin618/Youtube_channels_analysis', '_blank')}>
                        リポジトリを見る <p className="arrow"></p>
                    </button>
                </div>,<br />,

                <div className="project">

                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <h3 style={{ display: 'inline-block' }}>家具交換システム</h3>
                        <p style={{ display: 'inline-block', textAlign: 'right' }}>2021.12</p>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <p style={{ fontStyle: 'italic' }}>&nbsp;&nbsp;&nbsp;ReactJS, ExpressJS, MongoDB, Mocha/Chai, Heroku</p>
                        <p style={{ display: 'inline-block', textAlign: 'right' }}>3人チーム</p>
                    </div>

                    <p>&nbsp;&nbsp; • 家具アイテムの検索、公開、お気に入り登録、メッセージ送信のためのユーザーフレンドリーなプラットフォームを設計、実装。</p>
                    <p>&nbsp;&nbsp; • テストのためにMocha/Chaiを導入し、ユーザー管理などの管理機能を確保。</p>

                    <button className="view" onClick={() => window.open('https://github.com/Austin618/Furniture_exchange', '_blank')}>
                        リポジトリを見る <p className="arrow"></p>
                    </button>
                </div>
            ];
            skillsContent = [
                <div>
                    <h2>&nbsp;語学力</h2>
                    <p>&nbsp;&nbsp; • 英語</p>
                    <p>&nbsp;&nbsp; • 中国語 (ネイティブ)</p>
                    <p>&nbsp;&nbsp; • 日本語</p>

                    <h2>&nbsp;プログラミングスキル</h2>
                    <h3>&nbsp;&nbsp;プログラミング言語</h3>
                    <p>&nbsp;&nbsp; • Java</p>
                    <p>&nbsp;&nbsp; • JavaScript</p>
                    <p>&nbsp;&nbsp; • Python</p>
                    <p>&nbsp;&nbsp; • C/C++</p>

                    <h3>&nbsp;ソフトウェアフレームワーク</h3>
                    <p>&nbsp;&nbsp; • <strong>フロントエンド:</strong> React, Vue, React Native</p>
                    <p>&nbsp;&nbsp; • <strong>バックエンド:</strong> Java (Spring Boot, Spring Security, Spring Cloud); NodeJS (ExpressJS); Python (Flask, Django)</p>
                    <p>&nbsp;&nbsp; • <strong>テスト:</strong> Java (JUnit); NodeJS (Mocha/Chai); Python (Pytest)</p>

                    <h3>&nbsp;データベース</h3>
                    <p>&nbsp;&nbsp; • <strong>SQL:</strong> MySQL, PostgreSQL</p>
                    <p>&nbsp;&nbsp; • <strong>NoSQL:</strong> MongoDB, DynamoDB, Redis</p>

                    <h3>&nbsp;クラウドプラットフォーム</h3>
                    <p>&nbsp;&nbsp; • AWS, GCP, Heroku</p>

                    <h3>&nbsp;ツール</h3>
                    <p>&nbsp;&nbsp; • Git, CI/CD, Docker, Kubernetes, Sentry (本番配備の監視)</p>
                    <h2>&nbsp;データ構造、アルゴリズム、オペレーティングシステム</h2>
                </div>
            ];
            aboutContent = [
                <div>
                    &nbsp;&nbsp;&nbsp;&nbsp;私は、2023年にトロント大学でコンピュータ・サイエンス・スペシャリストの優等理学士号
                    を取得しました。昨年1月にカナダのスタートアップで、今年5月にアメリカの非営利団体でインターンシップに参加しました。
                    定期的に技術関連のニュースをフォローしており、面白いことを開発したり探求したりするのが好きです。
                </div>
            ];
            break;
        case 2:
            welcome1 = "欢迎来到";
            welcome2 = "叶启明的作品集";
            sub = "全栈开发人员";
            experience = "经验";
            projects = "项目";
            skills = "技能";
            about = "关于";
            experienceContent = [
                <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <h3 style={{ display: 'inline-block' }}>软件开发实习</h3>
                        <p style={{ display: 'inline-block', textAlign: 'right' }}>加拿大多伦多(远程)</p>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <p style={{ display: 'inline-block', fontStyle: 'italic' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ReactNative, AWS(Amplify, DynamoDB, S3, Cognito)</p>
                        <p style={{ display: 'inline-block', textAlign: 'right' }}>2023.5 ~ 2023.8</p>
                    </div>

                    <p>Develop for Good/Louisiana Husky Rescue Organization 主页: <a className="linkTo" href="http://louisianahuskyrescue.com/" target="_blank" rel="noopener noreferrer">链接</a></p>

                    <p>&nbsp;&nbsp; • 通过创建 "petOffenders "应用程序为开发工作做出贡献。</p>
                    <p>&nbsp;&nbsp; • 通过实施报告虐待/失踪宠物、在地图上查看虐待/失踪区域以及搜索 "高危 "人员等功能，增强用户体验。</p>
                    <p>&nbsp;&nbsp; • 为不同用户权限开发了 GraphQL API，包括管理页面和针对注册用户的专门报告/地图功能。</p>
                </div>,<br />,

                <div>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <h3 style={{ display: 'inline-block' }}>软件开发实习</h3>
                        <p style={{ display: 'inline-block', textAlign: 'right' }}>加拿大多伦多(远程)</p>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <p style={{ display: 'inline-block', fontStyle: 'italic' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;ReactNative, AWS(Amplify, DynamoDB, S3, Cognito)</p>
                        <p style={{ display: 'inline-block', textAlign: 'right' }}>2022.1 ~ 2022.4</p>
                    </div>

                    <p style={{ display: 'inline-block' }}>TAPP 主页: <a className="linkTo" href="https://theteacherapp.ca/" target="_blank" rel="noopener noreferrer">链接</a></p>

                    <p>&nbsp;&nbsp; • 为教育工作者的内部应用做出贡献，重点解决教师的心理健康问题。</p>
                    <p>&nbsp;&nbsp; • 在为 iOS 应用程序和网络应用程序构建 RESTful API 方面发挥了关键作用，集成了基于 cookie 会话的身份验证、用于授权的 OAuth2.0 (PassportJS)，以及用于密码加盐和散列的 bcrypt。</p>
                    <p>&nbsp;&nbsp; • 在应用程序上实现了搜索、新闻检查、聊天功能和消息通知等功能，同时还使管理员能够在网络平台上管理服务和更新账户信息。</p>
                </div>
            ];
            projectsContent = [
                <div className="project">
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <h3 style={{ display: 'inline-block' }}>货币兑换平台</h3>
                        <p style={{ display: 'inline-block', textAlign: 'right' }}>2023.2</p>
                    </div>

                    <p style={{ fontStyle: 'italic' }}>&nbsp;&nbsp;&nbsp;Java(Spring Boot, Spring Cloud), Docker, Google Kubernetes Engine(GKE)</p>

                    <p>&nbsp;&nbsp; • 为货币汇率服务和货币兑换服务创建微服务</p>
                    <p>&nbsp;&nbsp; • 利用谷歌 Kubernetes 引擎（GKE）实现无缝服务正常运行，确保无停机时间的持续运行。</p>

                    <button className="view" onClick={() => window.open('https://github.com/Austin618/SpringBoot_Microservices_Kubernetes', '_blank')}>
                        查看仓库 <p className="arrow"></p>
                    </button>
                </div>,<br />,

                <div className="project">
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <h3 style={{ display: 'inline-block' }}>互动博客系统</h3>
                        <p style={{ display: 'inline-block', textAlign: 'right' }}>2022.12</p>
                    </div>

                    <p style={{ fontStyle: 'italic' }}>&nbsp;&nbsp;&nbsp;Java(Spring Boot, Spring Security), MySQL, AWS(Elastic Beanstalk, RDS)</p>

                    <p>&nbsp;&nbsp; • 建立了动态博客交流服务，允许用户创建、发布和评论博客。</p>
                    <p>&nbsp;&nbsp; • 实施 JWT 身份验证以确保安全访问，并利用数据传输对象 (DTO) 设计模式有效处理数据。</p>

                    <button className="view" onClick={() => window.open('https://github.com/Austin618/Blog_System', '_blank')}>
                        查看仓库 <p className="arrow"></p>
                    </button>
                </div>,<br />,

                <div className="project">
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <h3 style={{ display: 'inline-block' }}>TikTok 标签分析器</h3>
                        <p style={{ display: 'inline-block', textAlign: 'right' }}>2022.10</p>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <p style={{ fontStyle: 'italic' }}>&nbsp;&nbsp;&nbsp;VueJS, Flask, MongoDB, Heroku, Sentry</p>
                        <p style={{ display: 'inline-block', textAlign: 'right' }}>6人团队</p>
                    </div>

                    <p>&nbsp;&nbsp; • 利用第三方 TikTok API 创建了一个系统，用于生成标签和推荐有影响力的人。</p>
                    <p>&nbsp;&nbsp; • 为有影响力的人提供定制标签，并向广告商推荐有影响力的人，从而加强营销策略。</p>

                    <button className="view" onClick={() => window.open('https://github.com/Austin618/TikTok_influencers_tags', '_blank')}>
                        查看仓库 <p className="arrow"></p>
                    </button>
                </div>,<br />,

                <div className="project">
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <h3 style={{ display: 'inline-block' }}>YouTube 关键字推荐系统</h3>
                        <p style={{ display: 'inline-block', textAlign: 'right' }}>2022.9</p>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <p style={{ fontStyle: 'italic' }}>&nbsp;&nbsp;&nbsp;ReactJS, ExpressJS, Heroku, Docker</p>
                        <p style={{ display: 'inline-block', textAlign: 'right' }}>3人团队</p>
                    </div>

                    <p>&nbsp;&nbsp; • 利用 YouTube 官方 API，为频道、播放列表和视频信息开发实时推荐系统。</p>
                    <p>&nbsp;&nbsp; • 采用先进的字符串算法，提高关键词推荐的精确度。</p>

                    <button className="view" onClick={() => window.open('https://github.com/Austin618/Youtube_channels_analysis', '_blank')}>
                        查看仓库 <p className="arrow"></p>
                    </button>
                </div>,<br />,

                <div className="project">

                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <h3 style={{ display: 'inline-block' }}>家具交换系统</h3>
                        <p style={{ display: 'inline-block', textAlign: 'right' }}>2021.12</p>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <p style={{ fontStyle: 'italic' }}>&nbsp;&nbsp;&nbsp;ReactJS, ExpressJS, MongoDB, Mocha/Chai, Heroku</p>
                        <p style={{ display: 'inline-block', textAlign: 'right' }}>3人团队</p>
                    </div>

                    <p>&nbsp;&nbsp; • 设计并实施了一个对用户友好型平台，用于搜索、发布、收藏和发送有关家具用品的信息。</p>
                    <p>&nbsp;&nbsp; • 纳入 Mocha/Chai 进行测试，并确保用户管理等管理功能。</p>

                    <button className="view" onClick={() => window.open('https://github.com/Austin618/Furniture_exchange', '_blank')}>
                        查看仓库 <p className="arrow"></p>
                    </button>
                </div>
            ];
            skillsContent = [
                <div>
                    <h2>&nbsp;语言技能</h2>
                    <p>&nbsp;&nbsp; • 英语</p>
                    <p>&nbsp;&nbsp; • 中文</p>
                    <p>&nbsp;&nbsp; • 日语</p>

                    <h2>&nbsp;编程技能</h2>
                    <h3>&nbsp;&nbsp;编程语言</h3>
                    <p>&nbsp;&nbsp; • Java</p>
                    <p>&nbsp;&nbsp; • JavaScript</p>
                    <p>&nbsp;&nbsp; • Python</p>
                    <p>&nbsp;&nbsp; • C/C++</p>

                    <h3>&nbsp;软件框架</h3>
                    <p>&nbsp;&nbsp; • <strong>前端:</strong> React, Vue, React Native</p>
                    <p>&nbsp;&nbsp; • <strong>后端:</strong> Java (Spring Boot, Spring Security, Spring Cloud); NodeJS (ExpressJS); Python (Flask, Django)</p>
                    <p>&nbsp;&nbsp; • <strong>测试:</strong> Java (JUnit); NodeJS (Mocha/Chai); Python (Pytest)</p>

                    <h3>&nbsp;数据库</h3>
                    <p>&nbsp;&nbsp; • <strong>SQL:</strong> MySQL, PostgreSQL</p>
                    <p>&nbsp;&nbsp; • <strong>NoSQL:</strong> MongoDB, DynamoDB, Redis</p>

                    <h3>&nbsp;云平台</h3>
                    <p>&nbsp;&nbsp; • AWS, GCP, Heroku</p>

                    <h3>&nbsp;工具</h3>
                    <p>&nbsp;&nbsp; • Git, CI/CD, Docker, Kubernetes, Sentry (生产部署监控)</p>
                    <h2>&nbsp;数据结构、算法和操作系统</h2>
                </div>
            ];
            aboutContent = [
                <div>
                    &nbsp;&nbsp;&nbsp;&nbsp;我于 2023 年以优异成绩获得多伦多大学计算机科学专业理学荣誉学士学位。我参加过两次实习，
                    去年一月在加拿大一家初创公司实习，今年五月在美国一家非营利组织实习。我经常关注科技新闻，喜欢开发和探索有趣的事物。
                </div>
            ];
            break;
    }

    return (
        <div style={{minWidth:'800px'}}>
            <Navbar currentLanguage={currentLanguage} />

            <div className="grey-background"></div>
            <img className="picContainer" src="https://i.ibb.co/m8DLvxJ/1-1.jpg" alt="background" />

            <div className="marginLeft welcome">
                <h1 style={{ position: 'absolute', fontSize: '35px', marginLeft: '10%', marginTop:'20%', minWidth:'550px'}}>{welcome1}<br />{welcome2}</h1><br />
                <p className="subTitle">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{sub}</p>
            </div>

            <Line />
            <div id="experience" className="test marginLeft">
                <i className="fa-solid fa-building sameLine"></i>
                <h1 className="sameLine">{experience}</h1>

                {experienceContent}
            </div>

            <Line />
            <div id="projects" className="test marginLeft">
                <i className="fa-solid fa-list-check sameLine"></i>
                <h1 className="sameLine">{projects}</h1>

                {projectsContent}
            </div>

            <Line />
            <div id="skills" className="test marginLeft">
                <i className="fa-solid fa-code sameLine"></i>
                <h1 className="sameLine">{skills}</h1>

                {skillsContent}
            </div>

            <Line />
            <div id="about" className="test marginLeft">
                <i className="fa-solid fa-address-card sameLine"></i>
                <h1 className="sameLine">{about}</h1>
                {aboutContent}
            </div>

            <Line />
            <Footnote currentLanguage={currentLanguage} />

            <Float currentLanguage={currentLanguage} />
            <Clock />
            <Cards currentLanguage={currentLanguage} />

            <Language currentLanguage={currentLanguage} setCurrentLanguage={setCurrentLanguage} />
        </div>
    );

}

export default Home;