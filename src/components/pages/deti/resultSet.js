const resultSet = [

    //웹앱
    {
        type: 'Web & Application',
        list: [

            {
                type: 'front',
                detail: 'Frontend Developer',
                desc: [
                    {
                        title: '프론트엔드란?',
                        text: `
                            사용자가 마주 보는 인터페이스
                        `
                    },
                    {
                        title: '프론트엔드 개발',
                        text: `
                            프론트엔드 개발은 주로 웹 및 모바일 솔루션의 사용자 인터페이스(UI)와 
                            사용자 경험(UX)을 개발 하는 데 초점을 맞추고 있습니다. 슬라이더, 레이아웃, 
                            폰트, 컬러 등 모든 요소가 프론트엔드 개발을 이루는 부분입니다. 또한 백엔드에서
                            데이터를 불러와 웹 페이지에 연동시켜 실제로 동작할 수 있게 구축하는 역할도 합니다.
                        `
                    },
                ],
                need: [
                    {text: `HTML, CSS, Javascript 활용에 능숙`},
                    {text: `사용자의 도구에 따라 유연한 방식으로 컨텐츠를 보여주는 소프트웨어 개발 능력`},
                    {text: `WebSocket 사용 경험`},
                    {text: `React 반응형 웹 개발 경험`},
                    {text: `Babel, Webpack, NPM등 프론트 엔드 개발 툴 사용경험`},
                ]
            },

            {
                type: 'back',
                detail: 'Backend Developer',
                desc: [
                    {
                        title: '백엔드란?',
                        text: `
                            서버 측과 데이터베이스를 관리해 주는 기술
                        `
                    },
                    {
                        title: '백엔드 개발',
                        text: `
                            백엔드 개발자는 IT 서비스에 필수적인 데이터들과 관련된 모든 프로그램을 관리하고 
                            서버를 효율적으로 관리하는 직군입니다. 백엔드에서는 데이터를 저장하고 관리하며, 
                            웹사이트의 클라이언트 측에서 모든 것이 매끄럽게 작동할 수 있게 해줍니다. 로그인, 
                            회원가입, 상품 리스트 받기, 결제하기 등의 기능들 모두 백엔드에서 개발을 이루는 부분입니다.
                        `
                    },
                ],
                need: [
                    {text: `모듈화에 대한 설계 원칙들의 개념과 장단점을 이해`},
                    {text: `서버 시스템 아키텍처 설계 패턴들의 개념과 장단점을 이해`},
                    {text: `HTTP API의 장단점을 이해`},
                    {text: `전통적 아키텍처와 클라우드 아키텍처의 차이를 이해`},
                    {text: `CQRS(Command Query Responsibility Segregation)를 이해`},
                    {text: `NoSQL 데이터베이스 사용 경혐`},
                    {text: `테스트 주도 개발 이해와 경험`},
                    {text: `Continuous Integration과 Continuous Deployment 경험`},
                    
                ]
            },

            {
                type: 'desk',
                // detail: 'Desktop App Developer(수정)',
                detail: 'Desktop App Developer',
                desc: [
                    {
                        title: '응용 소프트웨어란?',
                        text: `
                            응용 소프트웨어는 운영 체제에서 실행되는 모든 소프트웨어를 뜻합니다. 
                            따라서, 워드프로세서, 스프레드시트, 웹브라우저들뿐만 아니라 컴파일러나 
                            링커 등도 응용 소프트웨어에 속합니다.                    
                        `
                    },
                    {
                        title: '데스크톱 앱 개발',
                        text: `
                            데스크톱 환경에서 사용되는 프로그램을 개발하며 대부분 Windows OS 환경을 고려합니다. 
                            사용자를 위한 프로그램을 개발하기 위해 다양한 개발 언어들과 사용자들이 필요로하는 기능을
                            생각합니다. 프로그래밍 실력과 기획 능력 둘 다 필요합니다.
                        `
                    },
                ],
                need: [
                    {text: `임베디드 또는 통신 분야 개발 경험`},
                    {text: `관련학과 전공 및 졸업자`},
                    {text: `C# , 임베디드 엔지니어링 `},
                    
                ]
            },

            {
                type: 'mobile',
                // detail: 'Mobile App Developer(수정)',
                detail: 'Mobile App Developer',
                desc: [
                    {
                        title: '백엔드란?',
                        text: `
                            모바일 장치는 주머니에 쏙 들어갈만한 크기의 컴퓨터 장치입니다. 1990년대 들어 무선정보통신 기술이 
                            비약적으로 발전하면서 모바일은 이동통신 혹은 이동통신 기술을 기반으로 한 무선 인터넷 기술을 
                            통칭하는 단어로 떠올랐습니다.
                        `
                    },
                    {
                        title: '모바일 앱 개발',
                        text: `
                            모바일 기기에서 사용되는 프로그램, 고객의 요구에 적합한 어플리케이션 등을 개발하고 유지, 관리, 
                            보수하는 직군입니다. 모바일 콘텐츠를 개발하려면 먼저 기술력도 있어야 하지만 사람들이 궁금해하는 
                            상황을 정확하게 파악할 수 있는 능력이 필요합니다. 이러한 능력에 기초하여 창의적인 발상으로 
                            콘텐츠나 아이템을 선정하는 것이 중요합니다.
                        `
                    },
                ],
                need: [
                    {text: `Swift/Objective-C 개발 경험`},
                    {text: `MVC, MVVM 아키텍쳐 경험`},
                    {text: `1개 이상의 상용 모바일 App 개발 경험`},
                    {text: `앱 UI/UX 에 대한 높은 이해도`},
                ]
            },

        ]
    },

    //게임
    {
        type: 'Game Developer',
        list: [

            {
                type: 'model',
                detail: '3D Modeler',
                desc: [
                    {
                        title: '3D 모델링이란?',
                        text: `
                            가상의 3D 공간에 재현될 수 있는 수학적 모델을 만들어가는 과정
                        `
                    },
                    {
                        title: '3D 모델러',
                        text: `
                            3D 모델러는 2D로 스케치한 컨셉 드로잉을 3D 컴퓨터 그래픽을 활용하여 캐릭터, 
                            배경, 제품 등의 형상을 3D 모델로 구현하는 직군입니다. 컨셉이 담긴 2D 원화를 
                            토대로 3D 모델링 프로그램의 모델링 직업을 통해 3차원으로 변화시킵니다. 디자이너,
                            개발자와 협업하여 시뮬레이션 하거나 최종 작업물을 만듭니다.
                        `
                    },
                ],
                need: [
                    {text: `3D 프린터기 / 3D 스캐너 운용 경력자`},
                    {text: `CAM 프로그램 실무경력 / 역설계, 품질측정관련 경력자`},
                    {text: `Geomagic Design X를 활용한 역설계 경력자`},
                    {text: `Part Design, GSD 활용의 서페이스 디자인 및 3D 모델링 경력자`},
                    
                ]
            },

            {
                type: 'uiux',
                detail: 'UI/UX Designer',
                desc: [
                    {
                        title: 'UI, UX 란?',
                        text: `
                            UI : 이용자 인터페이스(user interface)의 줄임말로 휴대폰, 컴퓨터, 내비게이션 등 
                            디지털 기기를 작동시키는 명령이나 기법을 포함하는 사용자 환경
    
                            UX : 사용자 경험(User Experienc)의 줄임말로 사용자가 어떤 시스템, 제품, 서비스를 
                            직.간접적으로 이용하면서 느끼고 생각하게 되는 지각과 반응, 행동 등 총체적 경험
                        `
                    },
                    {
                        title: 'UI/UX 디자이너',
                        text: `
                            UI 디자이너 : 일반적으로 웹이나 앱 서비스를 만드는 일을 칭합니다. UI 디자이너는 스크린과 
                            행동이 이어지는 테스크 플로우 전체를 작업합니다. 정보를 작업하는 일로써 사용자에게 보여줘야 
                            하는 정보와 프로그래머가 받아야 하는 정보를 생각해야 합니다. 
    
                            UX 디자이너 :  사용자가 필요로 하는 게 뭔지, 불편하게 느끼는 게 뭔지 사용자들에게 
                            매력적으로 다가갈 수 있는 방법은 뭔지 등에 대해 종합적으로 고민합니다. UX 디자이너가 
                            밖으로는 사용자들의 니즈를 해결한다면, 내부적으로는 개발자, 경영자, 마케터 등 프로젝트의 
                            다양한 담당자들의 니즈를 듣고 조율합니다.
                        `
                    },
                ],
                need: [
                    {text: `IOS/ANDROID/Web 환경에 대한 이해도`},
                    {text: `포토샵, 일러스트레이터, 재플린, 피그마 등 디자인 관련툴 활용 능력`},
                    {text: `고객의 사용성을 생각하며 디자인하고 조형적 완성도가 높은 Ui를 구성할 수 있는 능력`},
                ]
            },

            {
                type: 'gclient',
                detail: 'Client Programmer',
                desc: [
                    {
                        title: '클라이언트란?',
                        text: `
                            (추가 해야함)
                        `
                    },
                    {
                        title: '클라이언트 프로그래머',
                        text: `
                            클라이언트는 사용자가 다운로드해 컴퓨터, 모바일 기기에 설치하는 게임 프로그램 
                            개발하는 직군입니다. 유저의 키보드, 마우스, 터치 조작에 반응하며 유저의 눈에 
                            보이는 게임의 캐릭터, 지형, 인터페이스, 이펙트, 애니메이션 등을 화려하고 아름답게 
                            표현하기도 합니다. 이 직업을 잘 소화하기 위해서는 다양한 그래픽 기술과 섬세한 작업을 필요로 합니다.
                        `
                    },
                ],
                need: [
                    {text: `C# WPF 어플리케이션 개발 또는 운영 경험`},
                    {text: `MS-SQL 연동 경험`},
                    {text: `REST API 제작 경험`},
                    {text: `AWS, AZURE등 클라우드 서비스 사용 경험`},
                ]
            },

            {
                type: 'gserver',
                detail: 'Server Programmer',
                desc: [
                    {
                        title: '서버란?',
                        text: `
                            (추가 해야함)
                        `
                    },
                    {
                        title: '서버 엔지니어',
                        text: `
                            서버 엔지니어는 온라인 게임의 실질적인 가상 세계를 만드는 직군입니다. 
                            예를 들어 친구 정보와 스코어 관리, 랭킹 시스템 구현 등을 처리하고 
                            가상세계를 구현하는 역할을 담당합니다. 또한 클라이언트가 보내주는 네트워크 
                            메시지를 처리하기도 합니다. 안정적인 로직 처리, 데이터베이스 기술, 
                            보안 기술 등을 필요로 합니다.
                        `
                    },
                ],
                need: [
                    {text: `웹 어플리케이션 개발, 운영 경험`},
                    {text: `JAVA, Spring 프레임웍 (Spring Boot)을 이용한 Web Application 개발 경험`},
                    {text: `MVC framework 기반의 웹 서비스나 API 개발경험`},
                    {text: `MySQL(Maria DB) 등의 RDBMS 경험`},
                    {text: `기본적인 Linux/Unix 명령 사용 능력`},
                ]
            },

        ]
    },

    //데이터
    {
        type: 'Data Scienist',
        list: [

            {
                type: 'dbm',
                detail: 'Database Manager',
                desc: [
                    {
                        title: '데이터 베이스란?',
                        text: `
                            정보의 일원화를 통해 정보 처리를 효율적으로 하기 
                            위해 서로 관련성을 가지며 중복이 없는 데이터의 집합
                        `
                    },
                    {
                        title: '데이터 베이스 관리자',
                        text: `
                            데이터 베이스 관리자는 데이터 베이스를 관리하는 직군입니다. 데이터베이스 
                            시스템의 설치를 위한 업무분석 및 설계에 참여하여 논리적.물리적 기술을 지원합니다. 
                            데이터베이스를 직접 활용하기 보다는 조직 내의 사용자를 위해 이를 제어합니다. 
                            보통 자료 복구, 데이터 보전, 보안, 개발 및 테스트 지원 등의 역할을 수행합니다.
                        `
                    },
                ],
                need: [
                    {text: `게임, 상용서비스의 데이터베이스 개발 경험`},
                    {text: `MySQL, MariaDB등의 RDBMS 개발  경험, MHA 구성 경험`},
                    {text: `NoSQL에 대한 개념 이해`},
                ]
            },

            {
                type: 'bigdb',
                detail: 'Data Analytics',
                desc: [
                    {
                        title: '빅데이터란?',
                        text: `
                            과거 아날로그 환경에서 생성되던 데이터에 비하면 그 규모가 방대하고, 
                            생성 주기도 짧고, 형태도 수치 데이터뿐 아니라 문자와 영상 데이터를 
                            포함하는 대규모 데이터
                        `
                    },
                    {
                        title: '빅데이터 분석가',
                        text: `
                            빅데이터 분석가란 특정 상황이나 패턴을 기계적으로 예측하며 대량의 
                            데이터를 관리하고 분석하는 직군입니다. 데이터 속에 함축된 트렌트나 
                            인사이트를 도출하고, 데이터로부터 새로운 부가가치를 창출합니다. 
                            대량의 빅데이터를 관리하고 분석해 사람들의 행동 패턴이나 시장 경제 
                            상황 등을 예측하기도 합니다. 이들은 SNS로 주고받는 문자나 몇 개의 
                            키워드로 상대의 성향을 파악할 수도 있습니다.
                        `
                    },
                ],
                need: [
                    {text: `SQL을 자유자재로 활용하여 데이터를 추출할 수 있는 능력`},
                    {text: `Python, R, Spark 등을 사용한 데이터 프로세싱 능력`},
                    {text: `통계 모델을 활용한 예측, 인사이트 도출 경험`},
                    {text: `Data warehouse 및 파이프라인 관련 지식과 이해도`},
                ]
            },

            {
                type: 'mle',
                detail: 'Machine-learning Engineer',
                desc: [
                    {
                        title: '머신러닝이란?',
                        text: `
                            사람이 학습하듯이 컴퓨터에도 데이터들을 줘서 
                            학습하게 함으로써 새로운 지식을 얻어내는 분야
                        `
                    },
                    {
                        title: '머신러닝 엔지니어',
                        text: `
                            머신러닝 엔지니어는 기계 스스로 데이터를 기반으로 학습하여
                            다양한 기능을 수행할 수 있도록 최적의 학습방법을 구현하는 
                            직군입니다. 머신러닝 엔지니어는 알고리즘, 신경망 및 기타 도구를 
                            사용하여 AI 분야를 어떤 방식으로든 발전시킵니다. 이들은 각 기능에 
                            필요한 데이터를 수집하고 연관성을 분석하며, 학습의 효율성을 높일 
                            수 있는 알고리즘을 활용하여 인공지능을 발달시킵니다.
                        `
                    },
                ],
                need: [
                    {text: `비즈니스 모델과 서비스 요구사항을 데이터 관점으로 이해 및 분석 적용 능력`},
                    {text: `Python, R, Spark 등을 사용한 데이터 프로세싱 능력`},
                    {text: `통계적 분석과 기계학습을 이용한 분석을 통해 데이터에 대한 Insight 도출 능력`},
                    {text: `대용량 데이터에 대한 전처리 및 Feature Engineering 경험`},
                    {text: `Tensorflow, Keras, Torch, Caffe 등 Deep Learning Framework를 활용한 프로젝트 경험`},
                ]
            },

        ]
    },

    //보안
    {
        type: 'Security',
        list: [

            {
                type: 'what',
                detail: 'White Hat',
                desc: [
                    {
                        title: '정보보안이란?',
                        text: `
                            컴퓨터에서 다루는 정보보안은 정보 처리 도중에 정보의 훼손, 변조, 유출 등을 
                            방지하기 위한 관리적, 기술적 방법을 의미합니다. 정보보호란 정보를 제공하는 
                            공급자 측면과 사용자 측면에서 논리적이고 물리적인 장치를 통해 미리 방어 
                            하는 것에 목적을 두고 있습니다.
                        `
                    },
                    {
                        title: '화이트 해커',
                        text: `
                            화이트 해커는 민.관서에서 서버의 취약점을 찾아 보안 기술을 
                            만드는 보안 전문가입니다. 또한 컴퓨터나 네트워크 시스템 보안의 
                            원리를 공부하고 연구하기도 합니다. 화이트 해커는 기업의 정보뿐만 
                            아니라 개인의 정보를 해킹이나 바이러스로부터 지키며, 보안을 
                            테스트하고 보호된 시스템과 네트워크에 취약점을 찾습니다.
                        `
                    },
                ],
                need: [
                    {text: `정보보안 업무 능력`},
                    {text: `ISMS 인증 대응 경험 또는 보안컨설팅 경험`},
                    {text: `정보처리기사, 정보보안기사, CISA, CISSP, 개인정보관리사, 네트워크 관리사 등 정보보안 관련 자격증`},
                ]
            },

            {
                type: 'ma',
                detail: 'Malware Analyst',
                desc: [
                    {
                        title: '악성코드란?',
                        text: `
                            악성코드는 사용자들 편의를 위해 만들어진 것이 아닌, 사용자에게 피해를 끼치는 악의적인 
                            목적으로 만들어진 모든 코드입니다. 정보통신망법에서는 '악성프로그램'이라고 합니다.
                            구현 방식으로 컴퓨터 바이러스, 트로이목마, 웜이 존재하며, 이와 별개로 실질적 행동에
                            따라서 따로 이름을 붙이기도 합니다.
                        `
                    },
                    {
                        title: '악성코드 분석가',
                        text: `
                            악성코드 분석가는 정보시스템과 정보 자산을 보호하기 위해 보안 정책을 
                            수립하고 정보 보안에 대한 예방책을 세우는 직군입니다. 시스템에 대한 
                            인가 받지 않은 접근 및 운영을 통제하고 침입 발생 시 즉각적으로 대응하고 
                            손상된 시스템을 복구합니다. 악성코드 분석가는 연구원에 가깝다고 볼 수 
                            있습니다. 그들은 악성코드를 가지고 연구하면서 막을 방법을 찾아냅니다.
                        `
                    },
                ],
                need: [
                    {text: `악성코드 리버싱(디버깅) 지식과 기술`},
                    {text: `기존 CVE 취약점에 대한 발생원인을 분석할 수 있는 능력`},
                    {text: `원활한 커뮤니케이션 능력`},
                ]
            },
        ]
    },

    //사물 인터넷
    {
        type: 'Internet of Thing',
        list: [

            {
                type: 'iot',
                detail: 'IoT Developer',
                desc: [{
                        title: 'IoT란?',
                        text: `
                            사물인터넷(Internet of Things)은 세상에 존재하는 유형 혹은 
                            무형의 객체들이 다양한 방식으로 연결되어 개별 객체들이 제공하지 
                            못했던 새로운 서비스를 제공하는 것
                        `
                    },
                    {
                        title: '사물인터넷 개발자',
                        text: ` 
                            사물인터넷 개발자는 사물 간의 센서와 통신 기능을 삽입하여 사물들끼리 
                            네트워크를 이용하여 실시간으로 정보를 주고받는 기술을 개발하고 이용하는 
                            직군입니다. 블루투스, 근거리 무선 통신(NFC), Wifi, USB, 아두이노 
                            등을 활용하여 센서 데이터 네트워크 서비스 인터페이스를 개발합니다. 
                            임베디드 시스템과도 연관되어 미래 전망이 밝은 직업 중 하나입니다.
                        `
                    },
                ],
                need: [
                    {text: `펌웨어 및 HW 개발에 대한 지식 및 경험`},
                    {text: `Node.js의 일반적인 이해도 및 활용 경력`},
                    {text: `Event-driven framework에 대한 이해`},
                    {text: `IoT 기반 서비스에 대한 이해도`},
                ]
            },
        ]
    },
]

export default resultSet