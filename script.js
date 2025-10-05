
    <script>
        // Page navigation functionality
        function showPage(pageId) {
            // Hide all pages
            document.querySelectorAll('.page').forEach(page => {
                page.classList.remove('active');
            });
            
            // Show the selected page
            document.getElementById(pageId).classList.add('active');
            
            // Scroll to top
            window.scrollTo(0, 0);
        }

        // Mobile menu functionality
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileLinks = document.getElementById('mobile-links');
        const mobileMenuIcon = document.getElementById('mobile-menu-icon');

        mobileMenuButton.addEventListener('click', () => {
            const isHidden = mobileLinks.classList.contains('hidden');
            if (isHidden) {
                mobileLinks.classList.remove('hidden');
                mobileMenuIcon.setAttribute('d', 'M6 18L18 6M6 6l12 12');
            } else {
                mobileLinks.classList.add('hidden');
                mobileMenuIcon.setAttribute('d', 'M4 6h16M4 12h16M4 18h16');
            }
        });

        // Floating Chat Button Functionality
        const chatToggleButton = document.getElementById('chat-toggle-button');
        const closeChatButton = document.getElementById('close-chat-button');
        const chatWindow = document.getElementById('chat-window');

        chatToggleButton.addEventListener('click', () => {
            chatWindow.classList.toggle('open');
            chatToggleButton.querySelector('i').classList.toggle('fa-times');
            chatToggleButton.querySelector('i').classList.toggle('fa-comments');
        });

        closeChatButton.addEventListener('click', () => {
            chatWindow.classList.remove('open');
            chatToggleButton.querySelector('i').classList.add('fa-comments');
            chatToggleButton.querySelector('i').classList.remove('fa-times');
        });


        // Chat functionality
        document.getElementById('send-button').addEventListener('click', function() {
            const userInput = document.getElementById('user-input').value;
            if (userInput.trim() !== '') {
                const chatMessages = document.getElementById('chat-messages');
                chatMessages.innerHTML += `
                    <div class="mb-4 text-right">
                        <div class="bg-teal-600 text-white p-4 rounded-lg inline-block max-w-xs">
                            <p>${userInput}</p>
                        </div>
                    </div>
                `;
                document.getElementById('user-input').value = '';
                // Simulate response
                setTimeout(() => {
                    chatMessages.innerHTML += `
                        <div class="mb-4">
                            <div class="bg-gray-200 text-gray-800 p-4 rounded-lg inline-block max-w-xs">
                                <p>Thank you for your question. Here's what you need to know: [Detailed response based on verified health sources].</p>
                            </div>
                        </div>
                    `;
                    chatMessages.scrollTop = chatMessages.scrollHeight;
                }, 1000);
            }
        });

        // FAQ Accordion functionality
        const accordionItems = document.querySelectorAll('.accordion-item');

        accordionItems.forEach(item => {
            const header = item.querySelector('.accordion-header');
            const content = item.querySelector('.accordion-content');
            const icon = item.querySelector('.accordion-icon');

            header.addEventListener('click', () => {
                const isOpen = content.classList.contains('open');
                
                // Close all other open accordion items
                accordionItems.forEach(otherItem => {
                    const otherContent = otherItem.querySelector('.accordion-content');
                    const otherHeader = otherItem.querySelector('.accordion-header');
                    const otherIcon = otherItem.querySelector('.accordion-icon');
                    if (otherContent.classList.contains('open') && otherItem !== item) {
                        otherContent.classList.remove('open');
                        otherHeader.classList.remove('open');
                        otherIcon.classList.remove('fa-times');
                        otherIcon.classList.add('fa-plus');
                    }
                });

                // Toggle the clicked item
                if (!isOpen) {
                    content.classList.add('open');
                    header.classList.add('open');
                    icon.classList.remove('fa-plus');
                    icon.classList.add('fa-times');
                } else {
                    content.classList.remove('open');
                    header.classList.remove('open');
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-plus');
                }
            });
        });

        // Continuous typing effect functionality
        const textElement = document.getElementById('typing-text');
        const phrases = [
            "We provide support in different languages: Hindi, English, Bengali, Marathi, Tamil, Telugu, Malayalam, Hinglish, and Odia."
        ];
        let phraseIndex = 0;
        let charIndex = 0;
        let isTyping = true;

        function type() {
            if (isTyping) {
                const currentPhrase = phrases[phraseIndex];
                if (charIndex < currentPhrase.length) {
                    textElement.textContent += currentPhrase.charAt(charIndex);
                    charIndex++;
                    setTimeout(type, 50);
                } else {
                    isTyping = false;
                    setTimeout(erase, 2000);
                }
            }
        }

        function erase() {
            if (!isTyping) {
                if (textElement.textContent.length > 0) {
                    textElement.textContent = textElement.textContent.slice(0, -1);
                    setTimeout(erase, 30);
                } else {
                    isTyping = true;
                    phraseIndex = (phraseIndex + 1) % phrases.length;
                    charIndex = 0;
                    setTimeout(type, 500);
                }
            }
        }
        
        document.addEventListener('DOMContentLoaded', () => {
            type();
        });

        // Video Modal Functionality
        const videoModal = document.getElementById('video-modal');
        const videoPlayerContainer = document.getElementById('video-player-container');
        const closeButton = videoModal.querySelector('.close-button');

        document.querySelectorAll('.video-container').forEach(container => {
            container.addEventListener('click', () => {
                const videoId = container.dataset.videoId;
                const iframe = document.createElement('iframe');
                iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
                iframe.title = 'YouTube video player';
                iframe.frameborder = '0';
                iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
                iframe.allowfullscreen = true;
                iframe.classList.add('absolute', 'inset-0', 'w-full', 'h-full');
                
                videoPlayerContainer.innerHTML = '';
                videoPlayerContainer.appendChild(iframe);
                videoModal.classList.add('open');
            });
        });

        closeButton.addEventListener('click', () => {
            videoModal.classList.remove('open');
            // Stop the video by removing the iframe
            videoPlayerContainer.innerHTML = '';
        });

        window.addEventListener('click', (event) => {
            if (event.target === videoModal) {
                videoModal.classList.remove('open');
                videoPlayerContainer.innerHTML = '';
            }
        });

document.addEventListener("DOMContentLoaded", function () {

    // ✨ Typing effect (optional)
    const heading = document.getElementById("hero-heading");
    if (heading) {
        const text = heading.textContent;
        heading.textContent = "";
        let i = 0;
        function type() {
            if (i < text.length) {
                heading.textContent += text.charAt(i);
                i++;
                setTimeout(type, 80);
            }
        }
        type();
    }

    // ✨ Page navigation helper
    window.showPage = function (pageId) {
        document.querySelectorAll(".page").forEach(page => {
            page.style.display = "none";
        });
        const activePage = document.getElementById(pageId);
        if (activePage) activePage.style.display = "block";
    };

    // ✅ Signup form handling
    const signupForm = document.getElementById("signupForm");

    if (signupForm) {
        signupForm.addEventListener("submit", function (e) {
            e.preventDefault();
            console.log("✅ Signup form submitted");

            const name = document.getElementById("signupName").value.trim();
            const email = document.getElementById("signupEmail").value.trim();
            const password = document.getElementById("signupPassword").value.trim();
            const confirmPassword = document.getElementById("signupConfirmPassword").value.trim();

            // 🧩 Basic validations
            if (!name || !email || !password || !confirmPassword) {
                alert("⚠️ Please fill in all fields.");
                return;
            }

            if (password !== confirmPassword) {
                alert("⚠️ Passwords do not match.");
                return;
            }

            // ✅ API call to Spring Boot backend
            fetch("http://localhost:8080/api/auth/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, password, confirmPassword })
            })
                .then(async res => {
                    if (!res.ok) {
                        const errorText = await res.text();
                        throw new Error(errorText || "Server error");
                    }
                    return res.json();
                })
                .then(data => {
                    console.log("📩 Response from backend:", data);

                    if (data.success) {
                        alert(data.message || "Signup successful!");
                        showPage("login-page"); // go to login
                    } else {
                        alert(data.message || "Signup failed. Try again.");
                    }
                })
                .catch(err => {
                    console.error("❌ Fetch error:", err);
                    alert("Something went wrong. Try again later.");
                });
        });
    } else {
        console.warn("⚠️ Signup form not found in DOM!");
    }

});


        
        // Chatbot functionality
        const messagesEl = document.getElementById('messages');
        const userInput = document.getElementById('userInput');
        const sendBtn = document.getElementById('sendBtn');
        const typingIndicator = document.getElementById('typingIndicator');
        const quickReplies = document.getElementById('quickReplies');
        const languageSelect = document.getElementById('languageSelect');
        let chatHistory = [];
        let currentLanguage = 'en';

        const OPENROUTER_API_KEY = "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";
        const MODEL_ID = "deepseek/deepseek-chat-v3.1:free";
        const API_URL = "https://openrouter.ai/api/v1/chat/completions";

        // This object now holds all the language-specific content and quick reply mappings
        const config = {
            languages: [
                {
                    code: 'en',
                    name: 'English',
                    greeting: "Hello! I am ArogyaMitra, your friendly health assistant. I can help you with:\n* **Preventive healthcare**\n* **Common disease symptoms**\n* **Vaccination schedules**\n* **Outbreak alerts**\n\nHow can I help you today?",
                    prompt: "You are a helpful and friendly health assistant named ArogyaMitra. Your goal is to provide clear, concise, and easy-to-understand information about public health topics like preventive healthcare, common disease symptoms, and vaccination schedules. Always present information in a structured way using headings, bullet points, and bold text to make it easy to read. Always advise the user to consult a professional for medical diagnosis or treatment. For real-time updates, you can check for outbreak alerts. Additionally, if a user asks for nearby healthcare facilities (hospitals, clinics, or vaccination centers), first ask them to provide their location. Then, based on the location they provide, offer general information about finding such services. Remind them that you cannot provide real-time, specific locations and that they should use a map service for the most accurate results.",
                    quickReplyMap: {
                        initial: ["What are the symptoms of dengue fever?", "Tips for a healthy diet", "Tips to prevent monsoon illnesses"],
                        dengue: ["How to prevent mosquito bites?", "What are the symptoms of malaria?", "What to eat during fever?"],
                        diet: ["Tips for a balanced diet", "How to stay hydrated?", "Healthy recipes for kids"],
                        monsoon: ["What are common monsoon diseases?", "How to boost immunity in rainy season?", "Tips for home hygiene"],
                        general: ["What are the benefits of regular exercise?", "How to manage stress?", "What is a balanced meal?"]
                    },
                    placeholder: "Ask ArogyaMitra about your health..."
                },
                {
                    code: 'hi',
                    name: 'Hindi',
                    greeting: "नमस्ते! मैं आरोग्यमित्र, आपकी स्वास्थ्य सहायक हूँ। मैं आपकी इन चीज़ों में मदद कर सकती हूँ:\n* **निवारक स्वास्थ्य देखभाल**\n* **सामान्य बीमारी के लक्षण**\n* **टीकाकरण कार्यक्रम**\n* **प्रकोप अलर्ट**\n\nआज मैं आपकी क्या मदद कर सकती हूँ?",
                    prompt: "आप आरोग्यमित्र नामक एक मददगार और मैत्रीपूर्ण स्वास्थ्य सहायक हैं। आपका लक्ष्य सार्वजनिक स्वास्थ्य विषयों जैसे निवारक स्वास्थ्य देखभाल, सामान्य बीमारी के लक्षण और टीकाकरण कार्यक्रम के बारे में स्पष्ट, संक्षिप्त और आसानी से समझ में आने वाली जानकारी प्रदान करना है। जानकारी को हमेशा शीर्षक, बुलेट पॉइंट और बोल्ड टेक्स्ट का उपयोग करके एक संरचित तरीके से प्रस्तुत करें ताकि इसे पढ़ना आसान हो। हमेशा उपयोगकर्ता को चिकित्सा निदान या उपचार के लिए एक पेशेवर से परामर्श करने की सलाह दें। वास्तविक समय के अपडेट के लिए, आप प्रकोप अलर्ट की जांच कर सकते हैं। इसके अतिरिक्त, यदि कोई उपयोगकर्ता आस-पास के स्वास्थ्य सेवा केंद्रों (अस्पतालों, क्लिनिकों, या टीकाकरण केंद्रों) के बारे में पूछता है, तो पहले उनसे उनका स्थान प्रदान करने के लिए कहें। फिर, उनके द्वारा प्रदान किए गए स्थान के आधार पर, ऐसी सेवाओं को खोजने के बारे में सामान्य जानकारी दें। उन्हें याद दिलाएं कि आप वास्तविक समय, विशिष्ट स्थान प्रदान नहीं कर सकते हैं और उन्हें सबसे सटीक परिणामों के लिए एक मानचित्र सेवा का उपयोग करना चाहिए।",
                    quickReplyMap: {
                        initial: ["डेंगू बुखार के क्या लक्षण हैं?", "स्वस्थ आहार के लिए सुझाव", "मानसून में बीमारियों से बचने के उपाय"],
                        dengue: ["मच्छरों से कैसे बचें?", "मलेरिया के लक्षण क्या हैं?", "बुखार में क्या खाएं?"],
                        diet: ["संतुलित आहार के लिए सुझाव", "खुद को हाइड्रेटेड कैसे रखें?", "बच्चों के लिए स्वस्थ व्यंजन"],
                        monsoon: ["मानसून में सामान्य बीमारियाँ क्या हैं?", "बरसात में प्रतिरक्षा कैसे बढ़ाएं?", "घर की स्वच्छता के लिए सुझाव"],
                        general: ["नियमित व्यायाम के क्या लाभ हैं?", "तनाव को कैसे नियंत्रित करें?", "संतुलित भोजन क्या है?"]
                    },
                    placeholder: "आरोग्यमित्र से अपने स्वास्थ्य के बारे में पूछें..."
                },
                {
                    code: 'mr',
                    name: 'Marathi',
                    greeting: "नमस्कार! मी आरोग्यमित्र, तुमची आरोग्य सहाय्यक आहे. मी तुम्हाला या बाबतीत मदत करू शकते:\n* **प्रतिबंधक आरोग्य सेवा**\n* **सामान्य रोगांची लक्षणे**\n* **लसीकरण वेळापत्रक**\n* **साथीच्या रोगांच्या सूचना**\n\nआज मी तुम्हाला कशी मदत करू शकेन?",
                    prompt: "आपण आरोग्यमित्र नावाचे एक मदतगार आणि मैत्रीपूर्ण आरोग्य सहाय्यक आहात. तुमचे ध्येय सार्वजनिक आरोग्य विषयांवर, जसे की प्रतिबंधक आरोग्य सेवा, सामान्य रोगांची लक्षणे आणि लसीकरण वेळापत्रक, याबद्दल स्पष्ट, संक्षिप्त आणि सहज समजून घेता येईल अशी माहिती देणे आहे। माहिती नेहमी शीर्षके, बुलेट पॉईंट्स आणि बोल्ड टेक्स्ट वापरून सुव्यवस्थित पद्धतीने सादर करा जेणेकरून ती वाचायला सोपी जाईल. नेहमी वापरकर्त्याला वैद्यकीय निदानाच्या वेळी किंवा उपचारासाठी तज्ञाचा सल्ला घेण्याचा सल्ला द्या। रिअल-टाइम अपडेट्ससाठी, तुम्ही साथीच्या रोगांच्या सूचना तपासू शकता. याव्यतिरिक्त, जर एखादा वापरकर्ता जवळपासच्या आरोग्य सेवा केंद्रांबद्दल (रुग्णालये, दवाखाने किंवा लसीकरण केंद्रे) विचारतो, तर त्यांना आधी त्यांचे स्थान विचारून घ्या। त्यानंतर, त्यांनी दिलेल्या स्थानानुसार, अशा सेवा शोधण्याबद्दल सामान्य माहिती द्या। त्यांना आठवण करून द्या की तुम्ही वास्तविक-वेळ, विशिष्ट स्थाने देऊ शकत नाही आणि सर्वात अचूक परिणामांसाठी त्यांनी नकाशा सेवेचा वापर करावा।",
                    quickReplyMap: {
                        initial: ["डेंग्यू तापाची लक्षणे काय आहेत?", "निरोगी आहारासाठी टिप्स", "पावसाळ्यातील रोगांपासून बचाव करण्याच्या टिप्स"],
                        dengue: ["डासांपासून कसे वाचायचे?", "मलेरियाची लक्षणे काय आहेत?", "ताप आल्यावर काय खावे?"],
                        diet: ["समतोल आहारासाठी टिप्स", "स्वत:ला हायड्रेटेड कसे ठेवावे?", "मुलांसाठी निरोगी रेसिपी"],
                        monsoon: ["पावसाळ्यातील सामान्य रोग कोणते आहेत?", "बरसात में प्रतिरक्षा कशी वाढवावी?", "घराच्या स्वच्छतेसाठी टिप्स"],
                        general: ["नियमित व्यायामाचे फायदे काय आहेत?", "तणाव कसा नियंत्रित करावा?", "समतोल आहार म्हणजे काय?"]
                    },
                    placeholder: "आरोग्यमित्रला तुमच्या आरोग्याबद्दल विचारा..."
                },
                {
                    code: 'bn',
                    name: 'Bengali',
                    greeting: "হ্যালো! আমি আরোগ্যমিত্র, আপনার বন্ধুত্বপূর্ণ স্বাস্থ্য সহকারী। আমি আপনাকে এই বিষয়ে সাহায্য করতে পারি:\n* **প্রতিরোধমূলক স্বাস্থ্যসেবা**\n* **সাধারণ রোগের লক্ষণ**\n* **টিকা দেওয়ার সময়সূচী**\n* **প্রাদুর্ভাবের সতর্কতা**\n\nআজ আমি আপনাকে কিভাবে সাহায্য করতে পারি?",
                    prompt: "আপনি आরোগ্যমিত্র নামে একটি সহায়ক এবং বন্ধুত্বপূর্ণ স্বাস্থ্য সহায়ক। আপনার লক্ষ্য হল প্রতিরোধমূলক স্বাস্থ্যসেবা, সাধারণ রোগের লক্ষণ এবং টিকা দেওয়ার সময়সূচীর মতো জনস্বাস্থ্য বিষয় সম্পর্কে পরিষ্কার, সংক্ষিপ্ত এবং সহজে বোঝা যায় এমন তথ্য প্রদান করা। তথ্য সর্বদা শিরোনাম, বুলেট পয়েন্ট এবং বোল্ড টেক্সট ব্যবহার করে একটি কাঠামোগত উপায়ে উপস্থাপন করুন যাতে এটি পড়া সহজ হয়। সর্বদা ব্যবহারকারীকে চিকিৎসা নির্ণয় বা চিকিৎসার জন্য একজন পেশাদারের সাথে পরামর্শ করার পরামর্শ দিন। রিয়েল-টাইম আপডেটের জন্য, আপনি প্রাদুর্ভাবের সতর্কতা পরীক্ষা করতে পারেন। উপরন্তু, যদি একজন ব্যবহারকারী কাছাকাছি স্বাস্থ্যসেবা কেন্দ্র (হাসপাতাল, ক্লিনিক বা টিকাদান কেন্দ্র) সম্পর্কে জিজ্ঞাসা করেন, প্রথমে তাদের অবস্থান জানাতে বলুন। তারপর, তাদের দেওয়া অবস্থানের উপর ভিত্তি করে, সেই ধরনের পরিষেবাগুলি খুঁজে বের করার জন্য সাধারণ তথ্য দিন। তাদের মনে করিয়ে দিন যে আপনি রিয়েল-টাইম, নির্দিষ্ট অবস্থান দিতে পারবেন না এবং সবচেয়ে সঠিক ফলাফলের জন্য তাদের একটি মানচিত্র পরিষেবা ব্যবহার করা উচিত।",
                    quickReplyMap: {
                        initial: ["ডেঙ্গু জ্বরের লক্ষণ কি?", "একটি স্বাস্থ্যকর খাদ্যের জন্য টিপস", "বর্ষাকালের রোগ প্রতিরোধের টিপ스"],
                        dengue: ["মশা থেকে কিভাবে বাঁচা যায়?", "ম্যালেরিয়ার লক্ষণ কি?", "জ্বরে কী খাওয়া উচিত?"],
                        diet: ["সুষম খাদ্যের জন্য টিপস", "কিভাবে নিজেকে হাইড্রেটেড রাখবেন?", "শিশুদের জন্য স্বাস্থ্যকর রেসিপি"],
                        monsoon: ["বর্ষাকালের সাধারণ রোগ কি?", "বর্ষাকালে রোগ প্রতিরোধ ক্ষমতা কিভাবে বাড়াবেন?", "ঘরের পরিচ্ছন্নতার টিপস"],
                        general: ["নিয়মিত ব্যায়ামের উপকারিতা কি?", "কিভাবে চাপ নিয়ন্ত্রণ করবেন?", "একটি সুষম খাবার কি?"]
                    },
                    placeholder: "আরোগ্যমিত্রকে আপনার স্বাস্থ্য সম্পর্কে জিজ্ঞাসা করুন..."
                }
                </script>