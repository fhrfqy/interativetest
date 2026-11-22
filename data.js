/* All study content. Question types:
   mcq    {q, code?, o:[options], a:index, why}
   tf     {q, a:true|false, why}
   order  {q, lines:[text | [text, rank]], why}   lines are given in the correct order;
          lines that share a rank may appear in either order.
   written{q, pts:[model answer points]}
   java:true marks a Java GUI question. */

const CHAPTERS = [
/* =========================================================== CHAPTER 1 */
{
  id: "c1", num: "Chapter 1", color: "--c1",
  title: "HCI & Interaction Design",
  blurb: "What HCI is, the design process, the 6 usability goals and the 6 design principles.",
  notes: `
<h2 id="c1-what"><span class="tag">01 · the big idea</span>HCI is a conversation</h2>
<p><b>Human–Computer Interaction (HCI)</b> is the study of the interaction between people (users) and computers. It is described as a <b>dialogue</b>, because <b>the output of one side becomes the input of the other</b>: you click, the computer shows something, you react to what it shows, and so on.</p>
<p>HCI is concerned with the <b>design, evaluation and implementation</b> of interactive computing systems for human use, and with studying what happens around them.</p>
<div class="box story"><b class="lab">Picture it</b>The most powerful computer in the world is worthless if a human can't use it properly. HCI exists to close that gap.</div>
<p>It is <b>interdisciplinary</b>: computer scientists, engineers, psychologists, social scientists and designers all play a part.</p>
<h3>HCI gives us methods for:</h3>
<ul>
<li>capturing what people <b>want to do</b>, not just what the technology can do</li>
<li>translating what people want into good design</li>
<li>involving people in the design process</li>
<li>designing for diverse users and uses</li>
</ul>
<p><b>Goal of HCI:</b> improve the interaction between users and computers by making computers more <b>user-friendly</b> and receptive to the user's needs.</p>

<h2 id="c1-interface"><span class="tag">02 · where it happens</span>Interaction and the interface</h2>
<p><b>Interaction</b> is the dialogue made of <b>commands</b>, <b>data input</b> to the computer and <b>display output</b> from the computer.</p>
<p>Interaction takes place at the <b>interface</b>, also called the <b>User Interface (UI)</b>. Through it the human gives instructions or data, and through it the human receives feedback. Most interfaces are dynamic.</p>

<h2 id="c1-why"><span class="tag">03 · why bother</span>Why study HCI? Two views</h2>
<div class="duo">
<div><b>Business view</b>
<ul><li>Use people more productively. <b>People costs now far outweigh hardware and software costs.</b></li>
<li>People expect "easy to use" systems. They won't tolerate bad design; they'll switch to another product.</li></ul></div>
<div><b>Human factors view</b>
<ul><li>Humans have limitations.</li>
<li>Errors are costly: loss of time and money, <b>loss of lives</b> in critical systems, and loss of morale.</li></ul></div>
</div>
<div class="box tip"><b class="lab">Exam tip</b>If the question says "money / productivity / customers leave", it's the <b>business view</b>. If it says "human limitations / errors / safety", it's the <b>human factors view</b>.</div>

<h2 id="c1-id"><span class="tag">04 · the process</span>Interaction design</h2>
<p>Interaction design makes HCI feel <b>human-like</b>: interactive products create a human connection by giving <b>feedback</b>. It's about designing interactive products that support how people communicate and interact in everyday and working life.</p>
<h3>The 4 activities (learn this order)</h3>
<div class="stepper" data-widget="stepper" data-steps='[["Requirements","<b>1. Identify needs & establish requirements.</b> Who are the target users and what support could the product give? This is the base of a user-centred approach."],["Alternatives","<b>2. Develop alternative designs.</b> Conceptual design (what users can do, which concepts they need) and physical design (images, colours, menus, icons)."],["Prototype","<b>3. Build interactive versions (prototypes).</b> Low fidelity = paper and cardboard. High fidelity = software that looks like the final product."],["Evaluate","<b>4. Evaluate throughout the process</b>, not only at the end: errors made, appeal, how well it meets requirements. Quality assurance and testing."]]'></div>
<div class="duo">
<div><b>Conceptual design</b>Produces the <b>conceptual model</b>: what people can do with the product and what concepts they need to understand to use it.</div>
<div><b>Physical design</b>The <b>details</b>: image, colours, menu design, icon design.</div>
<div><b>Low-fidelity prototype</b>Doesn't look much like the final product. Uses different materials: <b>paper, cardboard</b>.</div>
<div><b>High-fidelity prototype</b>Uses materials you'd expect in the final product and <b>looks very much like it</b> (software-based).</div>
</div>
<div class="box mem"><b class="lab">Memory hook</b><b>"Really Awesome Prototypes Evolve"</b>: Requirements → Alternatives → Prototype → Evaluate.</div>

<h3>Related fields</h3>
<div class="tblwrap"><table class="tbl">
<tr><th>Field</th><th>Focus</th></tr>
<tr><td>User experience (UX)</td><td>How a product behaves and is used by people in the real world</td></tr>
<tr><td>Human-centred computing</td><td>How humans (individuals and groups) adopt, adapt and organise their lives around technology</td></tr>
<tr><td>User-centred design</td><td>Needs, wants and limitations of the end user get attention at <b>every stage</b> of design</td></tr>
<tr><td>Universal usability</td><td>Built-in flexibility so <b>all people, regardless of age and ability</b>, can use it</td></tr>
</table></div>

<h2 id="c1-goals"><span class="tag">05 · the most examined part</span>The 6 usability goals</h2>
<p><b>Use + ability = usability.</b> Products should be easy to learn, effective to use and enjoyable from the user's point of view. Tap each card to reveal its key question and example.</p>
<div class="flips" data-widget="flips">
<button class="flip"><span class="q">Goal 1</span><span class="t">Effectiveness</span><span class="a">How good the system is at doing what it's supposed to do. <i>"Can users do the work they need to do?"</i></span><span class="hint">tap to reveal</span></button>
<button class="flip"><span class="q">Goal 2</span><span class="t">Efficiency</span><span class="a">Once learned, can users stay highly productive? Time and errors. <i>Example: Amazon one-click buying.</i></span><span class="hint">tap to reveal</span></button>
<button class="flip"><span class="q">Goal 3</span><span class="t">Safety</span><span class="a">Protect users from dangerous errors and let them recover. <i>Example: Delete is not placed next to Save; Ctrl+Z undo.</i></span><span class="hint">tap to reveal</span></button>
<button class="flip"><span class="q">Goal 4</span><span class="t">Utility</span><span class="a">The right kind and breadth of functions. <i>Example: a word processor has nearly every feature to write and format text.</i></span><span class="hint">tap to reveal</span></button>
<button class="flip"><span class="q">Goal 5</span><span class="t">Learnability</span><span class="a">How easy to learn. <i>"Can users figure out what to do by exploring the interface?"</i></span><span class="hint">tap to reveal</span></button>
<button class="flip"><span class="q">Goal 6</span><span class="t">Memorability</span><span class="a">Easy to remember once learned, especially for <b>infrequent</b> tasks. Menus and icons help, if named well.</span><span class="hint">tap to reveal</span></button>
</div>
<div class="box mem"><b class="lab">Memory hook</b><b>"Every Engineer Should Use Logical Methods"</b> → Effective, Efficient, Safe, Utility, Learnable, Memorable.</div>
<div class="box tip"><b class="lab">Exam trap</b>Effectiveness = <i>can</i> they do the job at all? Efficiency = how <i>fast</i> once they know how. Utility = are the <i>right features</i> there?</div>

<h3>User experience (UX) goals</h3>
<p>UX goals are about <b>how people feel</b> about the product: satisfaction when using it, looking at it, holding it, opening or closing it. Example: a phone case designed smooth and silky to fit the palm. Words like <i>satisfying, enjoyable, fun, aesthetically pleasing, motivating</i> are UX goals, <b>not</b> usability goals.</p>

<h3>5 measurable factors for UI design</h3>
<div class="duo">
<div><b>Time to learn</b>How long to learn the core tasks</div>
<div><b>Speed of performance</b>How fast tasks are done</div>
<div><b>Error rate</b>How many and what kind of errors</div>
<div><b>Subjective satisfaction</b>How much users like it</div>
<div><b>Cost</b>Cost to build and use</div>
</div>

<h2 id="c1-principles"><span class="tag">06 · each one has a question</span>The 6 design principles</h2>
<p>Design principles help designers decide what users should <b>see</b> and <b>do</b>. Each principle comes with the question the user is silently asking.</p>
<div class="flips" data-widget="flips">
<button class="flip"><span class="q">"Can I see it?"</span><span class="t">Visibility</span><span class="a">The more visible functions are, the more likely users know what to do next.</span><span class="hint">tap to reveal</span></button>
<button class="flip"><span class="q">"What is it doing now?"</span><span class="t">Feedback</span><span class="a">Every action needs a reaction: a sound, a moving dial, a spinning wheel.</span><span class="hint">tap to reveal</span></button>
<button class="flip"><span class="q">"Why can't I do that?"</span><span class="t">Constraints</span><span class="a">Restrict what users can do at a given moment, e.g. greyed-out menu items.</span><span class="hint">tap to reveal</span></button>
<button class="flip"><span class="q">"I've seen this before"</span><span class="t">Consistency</span><span class="a">Similar operations and elements for similar tasks, e.g. Ctrl+C copies everywhere.</span><span class="hint">tap to reveal</span></button>
<button class="flip"><span class="q">"Where am I, where can I go?"</span><span class="t">Mapping</span><span class="a">Controls resemble their effect. The vertical scroll bar: drag down, page moves down.</span><span class="hint">tap to reveal</span></button>
<button class="flip"><span class="q">"How do I use it?"</span><span class="t">Affordance</span><span class="a">What an object looks like tells you how to use it, e.g. a button looks pressable.</span><span class="hint">tap to reveal</span></button>
</div>

<h3>See the principles in Java Swing</h3>
<pre class="code">// CONSTRAINT: Save is disabled until the user types something
saveBtn.setEnabled(false);

// FEEDBACK: tell the user what just happened
saveBtn.addActionListener(e -> {
    model.save();
    statusLabel.setText("Saved!");
});

// SAFETY: confirm before a destructive action
int choice = JOptionPane.showConfirmDialog(frame,
        "Delete this file?", "Confirm", JOptionPane.YES_NO_OPTION);
if (choice == JOptionPane.YES_OPTION) { model.delete(); }

// VISIBILITY / LEARNABILITY: a tooltip explains the button
saveBtn.setToolTipText("Save your work (Ctrl+S)");</pre>

<h2 id="c1-good"><span class="tag">07 · wrapping up</span>Avoiding bad design</h2>
<ul>
<li>Identify needs and establish requirements</li>
<li>Develop alternative designs</li>
<li>Build prototypes of increasing complexity that users can assess</li>
<li>Evaluate <b>throughout</b> the process, not only at the end</li>
<li>Project goals identified, documented and agreed <b>at the start</b>; users involved <b>throughout</b></li>
</ul>
<h3>Proper design considers three kinds of interaction</h3>
<div class="duo">
<div><b>Physical</b>System <b>input</b>: mouse, speech (or noise), gesture</div>
<div><b>Perceptual</b>System <b>output</b>: visual, audio, haptic</div>
<div><b>Conceptual</b>Do we know how the system works and what to do?</div>
</div>
<h3>HCI's impact</h3>
<div class="duo">
<div><b>Society</b>Computers as an every-moment partner; less training needed. Touch screens; voice control is for some people the only way to use a computer.</div>
<div><b>Culture</b>Smartphones changed our "empty time"; social media changed how we keep in touch; games become social and productive tools.</div>
<div><b>Economy</b>Big productivity gains, faster and simpler input, less training, more people able to use technology.</div>
</div>
<p><i>"HCI is concerned with understanding the influence technology has on how people think, value, feel, and relate…"</i> (Wright &amp; McCarthy, 2008)</p>
`,
  quiz: [
    {t:"mcq", q:"Why is HCI described as a \"dialogue\" between human and computer?", o:["Because users talk to computers using speech","Because the output of one serves as the input for the other","Because it uses a command-line interface","Because computers and humans share the same memory"], a:1, why:"The slides define HCI as a dialogue or interchange because the output of one side (the computer's display) becomes the input for the other (the human's next action), and the other way round. It isn't about speech specifically."},
    {t:"mcq", q:"Where does interaction between a human and a computer take place?", o:["At the back end","In the database","At the interface (user interface)","In the operating system kernel"], a:2, why:"Interaction takes place at the interface, also known as the User Interface (UI). Through it the human gives instructions and receives feedback."},
    {t:"mcq", q:"\"People costs now far outweigh hardware and software costs.\" This reason for studying HCI belongs to which view?", o:["Human factors view","Business view","Technical view","Ethical view"], a:1, why:"The business view is about money and productivity: employing people productively, and users switching products when a system is hard to use. The human factors view is about human limitations and the cost of errors."},
    {t:"mcq", q:"A badly designed hospital infusion pump leads a nurse to enter the wrong dose. Which reason for studying HCI does this show best?", o:["Business view: people costs","Human factors view: errors are costly, including loss of lives","Users expect easy-to-use systems","Hardware is cheap"], a:1, why:"Human factors view: humans have limitations, and errors are costly in time, money, morale and, in critical systems, lives."},
    {t:"order", q:"Put the four activities of the interaction design process in order.", lines:["Identify needs and establish requirements","Develop alternative designs that meet those requirements","Build interactive versions (prototypes) of the designs","Evaluate what is being built"], why:"You must know who the users are and what they need (requirements) before suggesting designs. Designs are then prototyped so they can be assessed, and evaluation happens on what was built (and continues throughout)."},
    {t:"mcq", q:"A designer is choosing the colours, icons and menu layout of an app. Which sub-activity is this?", o:["Conceptual design","Physical design","Establishing requirements","Evaluation"], a:1, why:"Physical design is about details: image, colours, menu design, icon design. Conceptual design is the higher-level model of what people can do and which concepts they need."},
    {t:"mcq", q:"A team sketches screens on paper and cuts out cardboard buttons to test with users. This is a…", o:["High-fidelity prototype","Low-fidelity prototype","Final product","Conceptual model"], a:1, why:"Low fidelity prototypes don't look much like the final product and use different materials such as paper and cardboard. High fidelity uses software that looks like the final version."},
    {t:"tf", q:"Evaluation should happen only at the end, after the product is finished.", a:false, why:"The slides say to evaluate what is being built throughout the process, not only at the end. Late evaluation makes problems expensive to fix."},
    {t:"mcq", q:"Which of these is NOT one of the 6 usability goals?", o:["Safe to use","Easy to remember how to use","Aesthetically pleasing","Having good utility"], a:2, why:"The 6 usability goals are effective, efficient, safe, good utility, easy to learn and easy to remember. 'Aesthetically pleasing' describes how people feel, so it is a user experience (UX) goal."},
    {t:"mcq", q:"Amazon's single-button (one-click) shopping is given as an example of which usability goal?", o:["Efficiency","Safety","Utility","Memorability"], a:0, why:"Efficiency is the time needed to use the interface and how productive experienced users can be. One-click buying cuts the steps for experienced users."},
    {t:"mcq", q:"A word processor has nearly all the features needed to compose and format text documents. Which goal is this?", o:["Effectiveness","Utility","Learnability","Efficiency"], a:1, why:"Utility measures whether the system provides the right kind and breadth of functionality, so users can do what they need or want to do."},
    {t:"mcq", q:"The Delete button is placed far away from the Save button, and Ctrl+Z undoes mistakes. Which usability goal?", o:["Safety","Efficiency","Consistency","Mapping"], a:0, why:"Safety protects users from dangerous errors and lets them recover. Both examples come from the slide on safety. Consistency and mapping are design principles, not usability goals."},
    {t:"mcq", q:"\"Can users figure out what to do by exploring the interface?\" is the key question for…", o:["Memorability","Learnability","Effectiveness","Visibility"], a:1, why:"Learnability is how easy and quick it is to learn to use a system. Memorability is about remembering once already learned."},
    {t:"mcq", q:"An accounting app is used only once a year at tax time. Which usability goal matters most for that?", o:["Memorability","Efficiency","Utility","Safety"], a:0, why:"Memorability is how easy a system is to remember after learning it, especially for operations used infrequently."},
    {t:"mcq", q:"\"Can users use the system to do the work they need to do?\" This is the key question of…", o:["Efficiency","Effectiveness","Utility","Learnability"], a:1, why:"Effectiveness is an overall measure of how well the system does what it's supposed to do. Efficiency is about speed once learned."},
    {t:"mcq", q:"Dragging the vertical scroll bar down moves the page down at the same rate. Which design principle?", o:["Affordance","Mapping","Consistency","Feedback"], a:1, why:"Mapping is the relationship between a control and its effect. The scroll bar is the slides' main example: it shows where you are, and control and effect move together."},
    {t:"mcq", q:"A menu item is greyed out because no file is open. Which design principle?", o:["Visibility","Constraints","Feedback","Mapping"], a:1, why:"Constraints restrict what users can do at a given moment ('Why can't I do that?'). Greying out prevents an invalid action."},
    {t:"mcq", q:"A spinning wheel appears while a file uploads. Which principle?", o:["Feedback","Affordance","Constraints","Consistency"], a:0, why:"Feedback sends back information about what has been done ('What is it doing now?'). Every action needs a reaction."},
    {t:"mcq", q:"A raised, shadowed button looks like it can be pressed. Which principle?", o:["Mapping","Affordance","Visibility","Utility"], a:1, why:"Affordance is an attribute of an object that tells people how to use it: what it looks like suggests how it's used ('How do I use it?')."},
    {t:"mcq", q:"Ctrl+C copies text in every app on your computer. Which principle?", o:["Consistency","Mapping","Efficiency","Constraints"], a:0, why:"Consistency means similar operations and elements for similar tasks ('I think I have seen this before')."},
    {t:"mcq", q:"Which of these is NOT one of the five measurable factors for UI design?", o:["Time to learn","Error rate","Number of features","Subjective satisfaction"], a:2, why:"The five are cost, subjective satisfaction, error rate, speed of performance and time to learn. Number of features isn't one."},
    {t:"mcq", q:"\"System output: visual, audio, haptic\" describes which kind of interaction to consider in proper design?", o:["Physical interaction","Perceptual interaction","Conceptual interaction","Social interaction"], a:1, why:"Perceptual interaction is about system output (what we perceive). Physical is system input (mouse, speech, gesture). Conceptual is whether we understand how the system works."},
    {t:"mcq", q:"Designing products with built-in flexibility so that all people, regardless of age and ability, can use them is called…", o:["User-centred design","Universal usability","Human-centred computing","User experience"], a:1, why:"That is the slide's definition of universal usability. User-centred design is about giving users' needs attention at each stage."},

    {t:"mcq", java:true, q:"Which design principle does this Swing code apply?", code:"saveBtn.setEnabled(false);\nnameField.getDocument().addDocumentListener(...);\n// Save is enabled only after the user types a name", o:["Feedback","Constraints","Mapping","Affordance"], a:1, why:"Disabling Save until a name is entered restricts what the user can do at that moment, which is a constraint. A greyed button also explains 'why can't I do that?'."},
    {t:"mcq", java:true, q:"Which design principle does the second line apply?", code:"saveBtn.addActionListener(e -> {\n    model.save();\n    statusLabel.setText(\"Saved!\");\n});", o:["Feedback","Consistency","Safety","Utility"], a:0, why:"statusLabel.setText(\"Saved!\") tells the user what their action accomplished, which is feedback. Without it the user wonders 'did it work?'."},
    {t:"order", java:true, q:"Order this Delete button handler so the program asks for confirmation (the safety goal) before deleting.", lines:["deleteBtn.addActionListener(e -> {","    int c = JOptionPane.showConfirmDialog(frame, \"Delete file?\", \"Confirm\", JOptionPane.YES_NO_OPTION);","    if (c == JOptionPane.YES_OPTION) {","        model.delete();","        status.setText(\"File deleted\");","    }","});"], why:"The listener opens first. Inside it, ask with showConfirmDialog, then check the answer, and only then delete. Feedback (status text) comes after the action it reports. Deleting before asking would defeat the safety goal."},
    {t:"order", java:true, q:"Order these lines to build and show a simple Swing window.", lines:["JFrame frame = new JFrame(\"HCI Demo\");","JButton btn = new JButton(\"Click me\");","frame.add(btn);","frame.pack();","frame.setVisible(true);"], why:"You need the frame and the button before you can add one to the other. pack() sizes the window from its components, so it must come after add(). setVisible(true) goes last so the user sees the finished window, not one that is still being built."},
    {t:"mcq", java:true, q:"saveBtn.setMnemonic(KeyEvent.VK_S) and a menu shortcut Ctrl+S match what almost every other app does. Which principle?", o:["Consistency","Mapping","Constraints","Affordance"], a:0, why:"Using the same shortcuts as other applications for the same task is consistency. Users think 'I've seen this before' and don't need to learn something new."},

    {t:"written", q:"Explain the six usability goals, giving an example of each.", pts:["Effectiveness: how well the system does what it should (can users do their work?)","Efficiency: productivity once learned, e.g. Amazon one-click","Safety: prevent and recover from errors, e.g. Delete away from Save, undo","Utility: right set of functions, e.g. word processor features","Learnability: easy to learn by exploring","Memorability: easy to remember, especially for infrequent tasks; menus and icons help"]},
    {t:"written", q:"Describe the four activities of the interaction design process.", pts:["Identify needs and establish requirements: know the target users (user-centred)","Develop alternative designs: conceptual design (conceptual model) and physical design (colours, menus, icons)","Prototyping: low fidelity (paper) or high fidelity (software) to communicate and assess","Evaluation: throughout the process; errors, appeal, meeting requirements; QA and testing"]},
    {t:"written", q:"Differentiate usability goals from user experience goals.", pts:["Usability goals are about the product being effective, efficient, safe, useful, easy to learn and remember (objective)","UX goals are about how users feel: satisfying, enjoyable, fun, pleasing (subjective)","Example: phone case that feels smooth in the hand is a UX goal"]}
  ]
},

/* =========================================================== CHAPTER 2 */
{
  id: "c2", num: "Chapter 2", color: "--c2",
  title: "User Interface Programming",
  blurb: "Interfaces, interactive systems, UI software layers, toolkits, widgets and event-driven programming.",
  notes: `
<h2 id="c2-eq"><span class="tag">01 · two equals signs</span>Interfaces &amp; interactive systems</h2>
<div class="duo"><div><b>Interface</b>= user interface</div><div><b>Interactive system</b>= human–computer interactive system</div></div>
<p>An <b>interface</b> is a set of commands or menus through which a user communicates with a program. Today the "commands" can also be taps, gestures, speech or text prompts.</p>
<div class="box story"><b class="lab">The golden rule</b>A user interface is well-designed when <b>the program behaves exactly how the user thought it would</b>.</div>
<p>The UI decides how easily users make the program do what they want, and it shapes their feelings and mood. A powerful program with a poor UI has little value, and users <b>blame the software</b>.</p>

<h3>Types of user interface</h3>
<div class="duo">
<div><b>1 · Command language</b>User must know machine- and program-specific instructions or codes.</div>
<div><b>2 · Menus</b>User chooses commands from lists shown on screen.</div>
<div><b>3 · GUI</b>User selects and clicks icons on the screen.</div>
<div><b>Beyond the GUI</b>Touch &amp; gesture, voice, conversational AI, spatial (AR/VR).</div>
</div>
<p>Modern GUI design languages: Apple <b>Liquid Glass</b> (2025), Google <b>Material 3 Expressive</b> (2025), Microsoft <b>Fluent Design</b> (Windows 11).</p>

<h3>What is an interactive system?</h3>
<p>Software that interacts with its environment: any system that accepts input from the user and gives information as output.</p>
<div class="duo">
<div><b>Human ↔ computer</b>Human–computer interaction</div>
<div><b>Computer ↔ computer</b>Between computer systems</div>
<div><b>User ↔ user</b>Between users <i>through</i> the computer</div>
</div>
<div class="duo">
<div><b>To the user, the system is…</b>a tool for tasks; something that takes input and (hopefully) shows output; too often, a source of frustration.</div>
<div><b>To the system, the user is…</b>a source of <b>asynchronous input</b>; an indirect target for output (display, speaker, lights).</div>
</div>
<p><b>The main purpose of UI programming is to produce an INTERACTIVE SYSTEM.</b></p>

<h2 id="c2-hci"><span class="tag">02 · for and with</span>HCI again, from a programmer's side</h2>
<p>We design <b>FOR and WITH users</b>. Engineers aren't good interface designers by default: we're expert computer users and we care about the computer. Users care about what the computer helps them <b>do</b>.</p>
<p>ACM definition: <i>HCI is a discipline concerned with the design, evaluation and implementation of interactive computing systems for human use and with the study of major phenomena surrounding them.</i></p>
<p>HCI is <b>multidisciplinary</b>: computer science, AI, cognitive science, ergonomics, engineering, design, graphic arts, psychology, social sciences.</p>
<div class="box story"><b class="lab">Real case</b>At Tullamarine Airport (Melbourne), the parking-fee machine was so confusing that <b>an employee was hired for a year just to help people use it</b>. In critical systems, UI quality is a safety issue.</div>

<h2 id="c2-prog"><span class="tag">03 · building it</span>Programming &amp; UI software</h2>
<p><b>Programming</b> is a creative process that instructs a computer how to do tasks: <b>discover</b> rules, <b>design</b> idealised representations, <b>understand</b> how they interact, <b>optimise</b> for safety, budget and correctness.</p>
<div class="box tip"><b class="lab">Famous quote</b><i>"As interfaces become easier to use, they become harder to create."</i> (Myers, 1994). UI software is large, complex and hard to implement, debug and modify, so special tools were built to help.</div>
<h3>Three kinds of software</h3>
<div class="duo">
<div><b>System / platform</b>OS, platform services, compilers, databases</div>
<div><b>Application</b>Office suites, games; delivered via app stores, browsers, subscriptions</div>
<div><b>User-written</b>Scripts, macros, programs written by users</div>
</div>
<h3>Components of UI software</h3>
<div class="duo">
<div><b>Windowing system</b>Splits the screen into windows; draws and receives input</div>
<div><b>Toolkit</b>A library of <b>widgets</b> plus functions to handle input events</div>
<div><b>Higher-level tools</b>Builders, declarative frameworks, design tools</div>
</div>
<h3>The software layer stack (top → bottom)</h3>
<div class="stepper" data-widget="stack" data-steps='[["Application","Apps you use: office suites, browsers, games"],["Toolkits & tools","Qt, GTK, SwiftUI, Jetpack Compose, Flutter, React, WinUI, <b>Java Swing</b>"],["Graphics library","DirectX, Metal, Vulkan, OpenGL, Skia"],["Windowing system","Wayland (X11 legacy), Windows DWM, macOS WindowServer"],["Input / Output","Drivers for keyboard, mouse, touch, display, audio"],["Operating system","Windows, macOS, Linux, Android, iOS"]]'></div>
<div class="box mem"><b class="lab">Memory hook</b><b>"All Tired Gamers Want Instant Ovaltine"</b> → Application, Toolkit, Graphics, Windowing, I/O, OS.</div>

<h2 id="c2-layers"><span class="tag">04 · inside the stack</span>Builders, toolkits, widgets, windows</h2>
<h3>Interface builders</h3>
<p>Visual tools to lay out a UI instead of coding every widget: Xcode, Android Studio, Visual Studio, Qt Designer, <b>Apache NetBeans (Swing GUI Builder for Java)</b>, Figma.</p>
<p>They give you: prototypes (<b>beware, they look real</b>), the right look, parts of the final product, speed, a low barrier to entry and help with user manuals. <b>But you still need to program, and write clean code.</b></p>
<h3>Interface toolkits</h3>
<p>Libraries of interactive objects (<b>widgets</b>, also called <b>controls</b>) used to build interfaces. Programmers use them through <b>event-based programming</b>.</p>
<div class="duo"><div><b>Advantage</b>UIs look and act like others from the same toolkit; no need to rewrite standard functions.</div><div><b>Disadvantage</b>Styles of interaction are <b>limited to those provided</b>.</div></div>
<p>Toolkits today: Qt (C++/Python), GTK 4 (C), SwiftUI (Swift), Jetpack Compose (Kotlin), Flutter (Dart), React (JS/TS), WinUI 3 and .NET MAUI (C#), <b>JavaFX / Swing (Java)</b>, Electron / Tauri. Classic ones: Smalltalk, Macintosh Toolbox, Java Swing, Motif, InterViews, Amulet, SUIT.</p>

<h3>Imperative vs declarative</h3>
<div class="duo">
<div><b>Imperative (classic, e.g. Swing)</b>Create widgets, then change them by hand every time something happens: <code class="i">label.setText(...)</code></div>
<div><b>Declarative (modern)</b>Describe the UI for the current state; the framework updates the screen. <b>UI = f(state)</b>. React, SwiftUI, Compose, Flutter.</div>
</div>

<h3>Widgets (window gadgets)</h3>
<p>The part of a GUI that lets the user interface with the application and OS. They display information and invite action. "Widget" can mean the graphic, the program controlling it, or both.</p>
<div class="tblwrap"><table class="tbl">
<tr><th>Widget on the slide</th><th>Java Swing class</th></tr>
<tr><td>Menu bar</td><td><code class="i">JMenuBar</code>, <code class="i">JMenu</code>, <code class="i">JMenuItem</code></td></tr>
<tr><td>Tab</td><td><code class="i">JTabbedPane</code></td></tr>
<tr><td>Label</td><td><code class="i">JLabel</code></td></tr>
<tr><td>Text field</td><td><code class="i">JTextField</code></td></tr>
<tr><td>Radio buttons</td><td><code class="i">JRadioButton</code> + <code class="i">ButtonGroup</code></td></tr>
<tr><td>Check box</td><td><code class="i">JCheckBox</code></td></tr>
<tr><td>Slider</td><td><code class="i">JSlider</code></td></tr>
<tr><td>List with scroll bar</td><td><code class="i">JList</code> inside <code class="i">JScrollPane</code></td></tr>
<tr><td>Button</td><td><code class="i">JButton</code></td></tr>
</table></div>
<div class="duo">
<div><b>Simple widgets</b>Buttons, scroll bars, labels</div>
<div><b>Composite widgets</b>Contain other widgets: dialog boxes, menus, colour pickers</div>
</div>
<p><b>Benefits of a widget (3):</b> <b>Presentation</b> (appearance), <b>Behaviour</b> (reaction to user actions), <b>Interface with the application</b> (notification of state changes).</p>

<h3>Windowing system (Scheifler, 1986)</h3>
<div class="duo">
<div><b>Window system</b>The <b>programming interface</b>: procedures for the app to draw on screen and get input.</div>
<div><b>Window manager</b>The <b>user interface</b>: lets users move windows; draws title bars, borders and icons.</div>
</div>
<p>Today GNOME and KDE are moving from X11 to <b>Wayland</b>; X11 apps run through XWayland.</p>

<h2 id="c2-event"><span class="tag">05 · the heart of GUI code</span>Event-based programming</h2>
<div class="duo">
<div><b>Closed system (computation)</b>Read input → compute → result. Has a <b>final state</b>.</div>
<div><b>Open system (interaction)</b>Events caused by the environment. <b>Infinite loop, non-deterministic.</b></div>
</div>
<p>In <b>event-driven programming</b>, the flow of the program is decided by <b>events</b>: mouse clicks, key presses, touch, sensor output, timers, network messages. It's the dominant paradigm for GUIs. In embedded systems, <b>hardware interrupts</b> can replace the main loop.</p>
<h3>The main loop: click "Next" to follow one event</h3>
<div class="stepper" data-widget="stepper" data-steps='[["Event","The user <b>clicks</b> a button. The OS puts the event in a queue."],["Main loop","The <b>main loop</b> is always running and listening. In Swing this is the <b>Event Dispatch Thread (EDT)</b>, which Java gives you."],["Callback","The loop finds the handler bound to that button and calls it: <b>actionPerformed(ActionEvent e)</b>."],["Response","The handler does the work: opens a window, saves data, updates a label… then the loop <b>goes back to listening</b>."]]'></div>

<h3>Three steps to an event-driven program</h3>
<ol>
<li><b>Write event handlers</b>: subroutines that respond to events.</li>
<li><b>Bind handlers to events</b>: so the right function runs. (IDEs combine 1 and 2: double-click a button in NetBeans to get an empty handler.)</li>
<li><b>Write the main loop</b>: usually <b>provided by the environment</b>.</li>
</ol>
<pre class="code">import javax.swing.*;
import java.awt.event.*;

public class SaveApp extends JFrame implements ActionListener {
    JButton saveBtn = new JButton("Save");
    JLabel status = new JLabel("Not saved");

    public SaveApp() {
        setLayout(new java.awt.FlowLayout());
        add(saveBtn);
        add(status);
        saveBtn.addActionListener(this);     // STEP 2: bind handler to event
        setSize(300, 120);
        setDefaultCloseOperation(EXIT_ON_CLOSE);
    }

    public void actionPerformed(ActionEvent e) {   // STEP 1: the handler
        if (e.getSource() == saveBtn) {
            status.setText("Saved!");
        }
    }

    public static void main(String[] args) {
        SwingUtilities.invokeLater(() -> new SaveApp().setVisible(true));
        // STEP 3: the main loop (EDT) is provided by Swing
    }
}</pre>
<div class="box tip"><b class="lab">Classic exam bug</b>"I wrote <code class="i">actionPerformed</code> but nothing happens when I click!" → You forgot step 2, <code class="i">btn.addActionListener(this)</code>. A handler that isn't bound never runs.</div>
<div class="tblwrap"><table class="tbl">
<tr><th>Listener interface</th><th>Method(s)</th><th>Fired by</th></tr>
<tr><td><code class="i">ActionListener</code></td><td>actionPerformed</td><td>JButton click, Enter in JTextField, JMenuItem</td></tr>
<tr><td><code class="i">MouseListener</code></td><td>mousePressed, mouseReleased, mouseClicked, mouseEntered, mouseExited</td><td>Mouse buttons</td></tr>
<tr><td><code class="i">MouseMotionListener</code></td><td>mouseMoved, mouseDragged</td><td>Mouse movement</td></tr>
<tr><td><code class="i">KeyListener</code></td><td>keyPressed, keyReleased, keyTyped</td><td>Keyboard</td></tr>
<tr><td><code class="i">ItemListener</code></td><td>itemStateChanged</td><td>JCheckBox, JComboBox</td></tr>
<tr><td><code class="i">ChangeListener</code></td><td>stateChanged</td><td>JSlider</td></tr>
</table></div>

<h2 id="c2-tools"><span class="tag">06 · going higher</span>Higher-level tools</h2>
<p>Toolkit-level programming is hard, so higher-level tools exist. The 9 classic categories, with modern forms:</p>
<div class="tblwrap"><table class="tbl">
<tr><th>Classic idea</th><th>Modern counterpart</th></tr>
<tr><td>State transition networks</td><td>State machines, statecharts</td></tr>
<tr><td>Declarative languages</td><td>HTML/CSS, JSX, SwiftUI, Compose, XAML</td></tr>
<tr><td>Constraint languages</td><td>CSS Flexbox/Grid, Auto Layout, ConstraintLayout</td></tr>
<tr><td>Event languages</td><td>Reactive streams, signals, async/await</td></tr>
<tr><td>Visual programming</td><td>Low-code / no-code, Figma-to-code</td></tr>
<tr><td>Object based</td><td>Component frameworks, design systems</td></tr>
<tr><td>Database interface</td><td>Schema-driven form generators</td></tr>
<tr><td>Language based, Context-free grammars</td><td>(classic categories)</td></tr>
</table></div>
<p><b>AI-assisted UI:</b> Figma Make and v0 turn prompts into UIs; Figma Dev Mode turns designs into code. Pattern: <b>the tool drafts the UI, the programmer reviews and completes it</b> (state, navigation, accessibility, tests).</p>
`,
  quiz: [
    {t:"mcq", q:"According to the notes, an interface is…", o:["The hardware connecting a monitor to a CPU","A set of commands or menus through which a user communicates with a program","The database behind an application","A programming language for GUIs"], a:1, why:"That's the definition on the slides. Today the 'commands' can also be taps, gestures, speech or text prompts."},
    {t:"mcq", q:"A user interface is well-designed when…", o:["It uses the latest design language","It has the most features","The program behaves exactly how the user thought it would","It runs on every platform"], a:2, why:"The key slide: a UI is well-designed when the program behaves exactly as the user expected. Features and styling don't guarantee that."},
    {t:"mcq", q:"Which type of user interface requires the user to know machine- and program-specific instructions or codes?", o:["Menu","GUI","Command language","Voice"], a:2, why:"Command language interfaces need memorised commands. Menus show lists to choose from; GUIs use icons you click."},
    {t:"mcq", q:"Two friends chat through a messaging app. Which type of interaction is this?", o:["Human ↔ computer","Computer ↔ computer","User ↔ user through the computer system","Closed system"], a:2, why:"User ↔ user is interaction between users through the computer system. The app is the medium, not the partner."},
    {t:"mcq", q:"From the system's point of view, the user is…", o:["A tool for accomplishing tasks","A source of asynchronous input","A source of frustration","A final state"], a:1, why:"To the system, the user is a source of asynchronous input (it can't predict when input comes) and an indirect target for output. 'A tool for tasks' is how the user sees the system."},
    {t:"mcq", q:"\"As interfaces become easier to use, they become harder to create.\" Who said this?", o:["Scheifler, 1986","Myers, 1994","Nielsen, 1993","Weiser, 1991"], a:1, why:"Myers (1994). Scheifler wrote about windowing systems, Nielsen about post-WIMP, Weiser about ubiquitous computing."},
    {t:"order", q:"Order the software layers from TOP (closest to the user) to BOTTOM.", lines:["Application","Interface tools & toolkits","Graphics library","Windowing system","Input / Output","Operating system"], why:"Each layer builds on the one below. The application uses a toolkit (e.g. Swing), which draws through a graphics library, inside windows from the windowing system, which talks to I/O drivers, all on the OS."},
    {t:"mcq", q:"In Scheifler's (1986) split, which part lets users move windows and draws title bars, borders and icons?", o:["Window system","Window manager","Toolkit","Graphics library"], a:1, why:"The window manager is the user interface part (moving windows, borders, title bars). The window system is the programming interface apps use to draw and get input."},
    {t:"mcq", q:"An interface toolkit is best defined as…", o:["A visual drag-and-drop editor","A library of widgets plus functions to handle input events","The operating system's driver layer","A prototyping tool made of paper"], a:1, why:"Toolkits are libraries of interactive objects (widgets/controls) plus functions for input events. A drag-and-drop editor is an interface builder, which is a different thing."},
    {t:"mcq", q:"What is the main DISADVANTAGE of interface toolkits?", o:["UIs look different from each other","You must rewrite standard functions","Styles of interaction are limited to those provided","They can't handle events"], a:2, why:"Toolkits limit you to their own interaction styles. The advantage is consistency (UIs look and act like others) and not rewriting standard functions."},
    {t:"mcq", q:"Which is an example of a composite (complex) widget?", o:["Button","Label","Scroll bar","Dialog box"], a:3, why:"Composite widgets contain other widgets. A dialog box holds labels, buttons and fields. Buttons, labels and scroll bars are simple widgets."},
    {t:"mcq", q:"The \"Behaviour\" benefit of a widget refers to…", o:["Its appearance","Its reaction to user actions","Notifying the application of state changes","Its size on screen"], a:1, why:"Presentation = appearance, Behaviour = reaction to user actions, Interface with the application = notification of state changes."},
    {t:"mcq", q:"An open (interactive) system is characterised by…", o:["Read input, compute, produce result, final state","An infinite loop and non-deterministic events from the environment","No user input","Batch processing"], a:1, why:"Open systems react to events from the environment in an infinite, non-deterministic loop. Closed systems (computation) end in a final state."},
    {t:"order", q:"Order the three steps for building an event-driven program.", lines:["Write event handlers","Bind handlers to events","Write the main loop (usually provided by the environment)"], why:"You write the handler first, then bind it so it runs on the right event, and the main loop dispatches events to bound handlers. IDEs often combine steps 1 and 2."},
    {t:"mcq", q:"In event-driven embedded systems, what can replace the constantly running main loop?", o:["Callbacks","Hardware interrupts","Widgets","Interface builders"], a:1, why:"The slides note that in embedded systems hardware interrupts can replace the main loop."},
    {t:"mcq", q:"Why does the slide say interface-builder prototypes need care?", o:["They are too slow","They look real, so people may think the product is finished","They can't be shown to users","They require advanced training"], a:1, why:"'Create prototypes, but beware: they look real.' Also: you still need to program and write clean code. The same caution applies to AI prompt-to-UI tools."},
    {t:"mcq", q:"In declarative UI, the screen is described as…", o:["A list of manual setText calls","UI = f(state)","A state transition network","A context-free grammar"], a:1, why:"Declarative frameworks render the UI as a function of state. When the state changes, the framework redraws. Imperative toolkits like Swing need manual updates."},
    {t:"mcq", q:"CSS Flexbox, Auto Layout and Android ConstraintLayout are modern forms of which classic higher-level tool category?", o:["Event languages","Constraint languages","Database interface","Visual programming"], a:1, why:"They lay out widgets using constraints (relationships between positions/sizes), so they map to constraint languages."},
    {t:"mcq", q:"Which interface builder on the slides is the Swing GUI Builder for Java?", o:["Xcode","Qt Designer","Apache NetBeans","Figma"], a:2, why:"Apache NetBeans has the Swing GUI Builder. Xcode is for Apple, Qt Designer for Qt, Figma is for design and prototyping."},

    {t:"mcq", java:true, q:"A student wrote this but clicking the button does nothing. What's missing?", code:"public class App extends JFrame implements ActionListener {\n    JButton b = new JButton(\"Go\");\n    JLabel l = new JLabel(\"...\");\n    public App() {\n        setLayout(new FlowLayout());\n        add(b); add(l);\n        setSize(200, 100);\n    }\n    public void actionPerformed(ActionEvent e) {\n        l.setText(\"Clicked!\");\n    }\n}", o:["setVisible(true) inside actionPerformed","b.addActionListener(this); in the constructor","A main loop written with while(true)","implements MouseListener"], a:1, why:"Step 1 (the handler) is written, but step 2 (binding) isn't. Without b.addActionListener(this), the button never calls actionPerformed. Don't write your own while(true) loop: Swing's Event Dispatch Thread is the main loop."},
    {t:"mcq", java:true, q:"Which method must a class implement when it implements ActionListener?", o:["public void actionPerformed(ActionEvent e)","public void mouseClicked(MouseEvent e)","public void run()","public void onClick()"], a:0, why:"ActionListener has exactly one method: actionPerformed(ActionEvent e). mouseClicked belongs to MouseListener."},
    {t:"mcq", java:true, q:"In a Swing program, who provides the main loop (step 3 of event-driven programming)?", o:["You must write while(true) in main()","The Event Dispatch Thread (EDT) provided by Swing/AWT","The window manager","The JButton class"], a:1, why:"The slides say the main loop is usually provided by the environment. In Java, Swing's Event Dispatch Thread queues events and calls your listeners."},
    {t:"order", java:true, q:"Order the lines of a minimal event-driven Swing program (handler, binding, then show the window).", lines:[["JFrame f = new JFrame(\"Counter\");",0],["JButton btn = new JButton(\"+1\");",0],["JLabel lbl = new JLabel(\"0\");",0],["btn.addActionListener(e -> lbl.setText(String.valueOf(Integer.parseInt(lbl.getText()) + 1)));",1],["f.setLayout(new FlowLayout());",2],["f.add(btn); f.add(lbl);",3],["f.pack();",4],["f.setVisible(true);",5]], why:"Objects must exist before you use them (the three new lines can be in any order). Binding the listener needs both btn and lbl. The layout is set before adding components, pack() sizes the window after adding, and setVisible(true) comes last."},
    {t:"mcq", java:true, q:"A window has two buttons, both using addActionListener(this). How does actionPerformed know which one was clicked?", code:"public void actionPerformed(ActionEvent e) {\n    if (________ == okBtn) { ... }\n    else { ... }\n}", o:["e.getSource()","this.getButton()","e.getKeyCode()","okBtn.isClicked()"], a:0, why:"ActionEvent.getSource() returns the component that fired the event. getKeyCode() belongs to KeyEvent."},
    {t:"mcq", java:true, q:"Which Swing class makes a set of JRadioButtons mutually exclusive (only one selected)?", o:["JPanel","ButtonGroup","JCheckBox","JComboBox"], a:1, why:"Adding radio buttons to a ButtonGroup makes only one selectable at a time. A JPanel only arranges them visually."},
    {t:"mcq", java:true, q:"The user clicks the button 3 times. What does the label show?", code:"int count = 0;   // field of the class\n\nbtn.addActionListener(e -> {\n    count++;\n    label.setText(\"Clicks: \" + count);\n});", o:["Clicks: 0","Clicks: 1","Clicks: 3","Nothing, the handler runs once"], a:2, why:"The handler is called once per click event by the main loop. Each call increments count and updates the label: 1, 2, 3. Events keep coming because an interactive system is an open, looping system."},
    {t:"mcq", java:true, q:"Swing code like label.setText(\"Hi\") inside a handler is an example of which UI style?", o:["Declarative: UI = f(state)","Imperative: change widgets by hand when something happens","Constraint language","Context-free grammar"], a:1, why:"Classic toolkits such as Swing are imperative: you create widgets and update them yourself. Declarative frameworks (React, SwiftUI, Compose) redraw from state automatically."},
    {t:"mcq", java:true, q:"Which Swing component shows a list with a scroll bar, as in the 'anatomy of a window' slide?", o:["JList inside a JScrollPane","JTextField","JTabbedPane","JSlider"], a:0, why:"JList shows items; wrapping it in a JScrollPane adds scroll bars. JTabbedPane = tabs, JSlider = slider."},

    {t:"written", q:"Explain the three steps to build an event-driven program, with an example in Java.", pts:["Write event handlers: e.g. actionPerformed(ActionEvent e) that saves data","Bind handlers to events: btn.addActionListener(this) or a lambda","Main loop: listens for events and calls the matching handler; provided by the environment (Swing EDT)","IDEs like NetBeans combine steps 1 and 2 (double-click a button)"]},
    {t:"written", q:"Differentiate between closed (computation) and open (interactive) systems.", pts:["Closed: read input, compute, produce result, reach a final state","Open: events from the environment, infinite loop, non-deterministic","Closed matches computation-style programs; open matches event-driven programming"]},
    {t:"written", q:"Describe the components / layers of user interface software.", pts:["Windowing system: divides the screen into windows, draws and gets input (window system vs window manager)","Toolkit: library of widgets plus event-handling functions","Higher-level tools: builders, declarative frameworks, design tools","Full stack: Application, Toolkits, Graphics library, Windowing, I/O, OS"]}
  ]
},

/* =========================================================== CHAPTER 3 */
{
  id: "c3", num: "Chapter 3", color: "--c3",
  title: "Peripherals",
  blurb: "How GUIs behave, input and output devices, displays, 3D control, wearables and post-WIMP.",
  notes: `
<h2 id="c3-gui"><span class="tag">01 · how GUIs behave</span>Four ideas that describe good graphical interaction</h2>
<h3>1. Direct manipulation</h3>
<div class="duo">
<div><b>Always visible</b>Objects of interest stay on screen.</div>
<div><b>Physical actions</b>Drag, tap or pinch instead of typing complex commands.</div>
<div><b>Fast and reversible</b>Quick, incremental actions with instant feedback, and undo.</div>
<div><b>Easy to learn</b>Start with little knowledge, learn step by step.</div>
</div>
<p>Examples: dragging a file to the bin, pinch-to-zoom, moving objects in a VR headset.</p>

<h3>2. Interaction as a state machine</h3>
<p>A GUI can be described as a <b>finite state machine</b>: a <b>state</b> is an interaction state and a <b>transition</b> is an <b>input event</b>. <b>Actions</b> run when a transition happens; <b>conditions</b> decide whether a transition can fire.</p>
<div class="stepper" data-widget="stepper" data-steps='[["Idle","State <b>Idle</b>. Nothing is happening. Waiting for the mouse."],["Down","Event <b>Down</b> (mouse pressed) → action <b>Record(P1)</b>: remember the start point. Move to state <b>Dragging</b>."],["Move","In <b>Dragging</b>, each <b>Move</b> event loops back to Dragging with action <b>Draw(P1, current)</b>: a rubber-band line follows the mouse."],["Up","Event <b>Up</b> (mouse released) → action <b>Done(P1, current)</b>: the shape is final. Back to <b>Idle</b>."]]'></div>
<pre class="code">// The same state machine in Java Swing
Point p1, current;
boolean dragging = false;              // the state

addMouseListener(new MouseAdapter() {
    public void mousePressed(MouseEvent e) {     // Down / Record(P1)
        p1 = e.getPoint(); dragging = true;
    }
    public void mouseReleased(MouseEvent e) {    // Up / Done(P1, current)
        dragging = false; shapes.add(new Line(p1, e.getPoint())); repaint();
    }
});
addMouseMotionListener(new MouseMotionAdapter() {
    public void mouseDragged(MouseEvent e) {     // Move / Draw(P1, current)
        current = e.getPoint(); repaint();
    }
});</pre>
<div class="box tip"><b class="lab">Java gotcha</b><code class="i">mouseDragged</code> and <code class="i">mouseMoved</code> belong to <b>MouseMotionListener</b>, not MouseListener. If you only call <code class="i">addMouseListener</code>, your drag code never runs.</div>

<h3>3. Elementary tasks</h3>
<div class="tblwrap"><table class="tbl">
<tr><th>Task</th><th>Meaning</th><th>Example / Swing widget</th></tr>
<tr><td>Entry</td><td>Type or speak text/numbers</td><td>JTextField</td></tr>
<tr><td>Selection</td><td>Choose an item: tap, click, gaze</td><td>JList, JComboBox</td></tr>
<tr><td>Triggering</td><td>Start an action</td><td>JButton, gesture</td></tr>
<tr><td>Scrolling</td><td>Move through content</td><td>Wheel, swipe, JScrollPane</td></tr>
<tr><td>Specifying arguments</td><td>Set properties</td><td>JSlider, JColorChooser</td></tr>
<tr><td>Transformations</td><td>Move, scale, rotate</td><td>Drag, pinch, twist</td></tr>
</table></div>

<h3>4. Interaction modes</h3>
<p>A <b>mode</b> is a state where <b>the same input means something different</b> from other modes.</p>
<div class="duo">
<div><b>Temporal</b>Stays until you change it: Caps Lock, a selected tool.</div>
<div><b>Spatial</b>Depends on <b>where</b> you are: which window or area.</div>
<div><b>Quasi-mode</b>Lasts only <b>while you hold it</b>: Shift.</div>
</div>
<p><b>Problem:</b> users forget which mode they're in and make errors. Fix: <b>show the current mode clearly</b>. Try it: same keys, different modes.</p>
<div class="modetoy" data-widget="modetoy">
<div class="row"><button class="key" data-k="caps">Caps Lock (temporal)</button><button class="key" data-k="shift">Hold Shift (quasi)</button></div>
<div class="row"><button class="key" data-k="a">a</button><button class="key" data-k="b">b</button><button class="key" data-k="c">c</button><button class="key" data-k="clr">clear</button></div>
<div class="screen"></div>
</div>

<h2 id="c3-struct"><span class="tag">02 · structure</span>Front end, back end, peripherals</h2>
<div class="duo">
<div><b>Front end (visible)</b>Output: what we see. Input: what we act with.</div>
<div><b>Back end (invisible)</b>Computation, communication, data storage and access.</div>
</div>
<p><b>Peripherals are the front end</b>: they connect people to the computer. Human senses → hardware → drivers, kernel and software. <b>Latency</b> (delay) matters at every step.</p>
<p>A <b>peripheral</b> is a device connected to a host computer that is <b>not an integral part of it</b>. It extends the host's abilities and often depends on it.</p>
<div class="duo">
<div><b>Input</b>Mouse, keyboard, camera, microphone</div>
<div><b>Output</b>Displays, printers, speakers</div>
<div><b>Storage</b>SSDs, USB flash drives, external drives</div>
</div>

<h2 id="c3-input"><span class="tag">03 · input</span>Input peripherals</h2>
<p>Any device that gives data and control signals to a computer. Classify them by:</p>
<div class="duo">
<div><b>Modality</b>How input is made: mechanical motion, sound, light (visual), touch</div>
<div><b>Discrete or continuous</b>Key press = <b>discrete</b>. Mouse position = <b>continuous</b> (digitised, but fast enough to look continuous)</div>
<div><b>Degrees of freedom</b>Normal mouse = 2D. A 3D CAD navigator = 3D</div>
</div>
<p><b>3D input:</b> keyboard (1D, key sequences), mouse and trackball (2D devices that control 3D through 2D widgets such as sliders and spin wheels), and today game controllers, 3D mice for CAD, and hand tracking in VR/XR.</p>
<h3>Text entry</h3>
<p>Punch cards → keyboard terminals → keyboards → stylus and tablet → touchscreen keyboards with prediction, swipe typing and voice dictation.</p>
<div class="duo">
<div><b>Dvorak layout</b>Reported <b>10–15% faster</b> than QWERTY, less fatigue</div>
<div><b>Chord keyboard</b>Only <b>4 or 5 keys</b> pressed together; fast one-handed input</div>
<div><b>Phone keyboards</b>Multi-tap (slow) → <b>T9</b> (one tap per letter + word suggestions) → predictive text and autocorrect</div>
</div>

<h2 id="c3-output"><span class="tag">04 · output</span>Displays</h2>
<div class="tblwrap"><table class="tbl">
<tr><th>Technology</th><th>What it is</th><th>Where</th></tr>
<tr><td>CRT, plasma</td><td>Older types, now rare</td><td>Old monitors, TVs</td></tr>
<tr><td>LCD / LED-backlit</td><td>Liquid crystals with a backlight</td><td>Monitors, laptops, TVs</td></tr>
<tr><td>Mini-LED</td><td>LCD with thousands of tiny backlights; very bright for HDR</td><td>TVs, tablets, laptops</td></tr>
<tr><td>OLED / AMOLED</td><td><b>Each pixel makes its own light</b></td><td>Phones, TVs, watches</td></tr>
<tr><td>Tandem OLED</td><td>Two OLED layers for brightness and life</td><td>Premium tablets, laptops</td></tr>
<tr><td>Micro-LED</td><td>Tiny LEDs as pixels; still emerging</td><td>Large, special displays</td></tr>
</table></div>
<h3>Size, resolution and density</h3>
<p><b>Size</b> = diagonal in inches (1 inch = 2.54 cm) plus aspect ratio. <b>Resolution</b> = number of pixels (e.g. 1920 × 1080). <b>Density (ppi)</b> = diagonal pixels ÷ diagonal inches.</p>
<div class="box mem"><b class="lab">Formula to memorise</b>diagonal px = √(width² + height²) &nbsp;→&nbsp; ppi = diagonal px ÷ diagonal inches</div>
<div class="calc" data-widget="ppi">
<label>Width px<input type="number" data-f="w" value="1920"></label>
<label>Height px<input type="number" data-f="h" value="1080"></label>
<label>Diagonal (inches)<input type="number" data-f="d" value="24" step="0.1"></label>
<div class="out"></div>
</div>
<p>Slide examples: 24" monitor at 1920×1080 → ≈2203 px diagonal → <b>≈92 ppi</b>. 6.1" phone at 2400×1080 → ≈2632 px → <b>≈431 ppi</b>.</p>
<h3>Colour depth and refresh rate</h3>
<div class="duo">
<div><b>Colour depth</b>8 bits = 256 colours<br>16 bits = 65,536<br>24 bits ≈ 16.7 million<br>32 bits = 24 + 256 levels of transparency</div>
<div><b>Refresh rate (Hz)</b>Frames per second. 60 Hz typical, 120 Hz common on phones, 240 Hz+ gaming OLED. <b>LTPO</b> varies 1–120 Hz to save battery.</div>
<div><b>Brightness</b>HDR is standard; phones reach 2,000–4,000 <b>nits</b> peak (a nit measures luminance).</div>
</div>
<div class="box tip"><b class="lab">Quick trick</b>Number of colours = 2<sup>bits</sup>. 2⁸ = 256, 2¹⁶ = 65,536, 2²⁴ = 16,777,216.</div>

<h2 id="c3-control"><span class="tag">05 · control &amp; 3D</span>Touch, haptics, eyes, hands, voice</h2>
<p><b>Tactile</b> = the sense of pressure on the skin. <b>Haptic feedback</b> uses vibration, force or surface change so users can <b>feel</b> the system: phone vibration, adaptive triggers, braille displays, devices for deaf-blind people, and ultrasound <b>mid-air haptics</b> (still mostly research).</p>
<h3>Classifying control devices</h3>
<div class="duo">
<div><b>Absolute</b>Sends a <b>position (x, y)</b>: tablets, touchscreens, optical pens</div>
<div><b>Relative</b>Sends a <b>movement (dx, dy)</b>: mice, joysticks, trackballs</div>
<div><b>Order 0</b>Device movement = object movement: mouse → cursor</div>
<div><b>Order 1</b>Device controls the <b>speed</b> of the object: joystick → cursor</div>
</div>
<div class="duo">
<div><b>Isotonic</b>Free-moving, uses <b>position</b> (displacement device): mouse</div>
<div><b>Elastic</b>Uses <b>position or force</b>, springs back: joystick</div>
<div><b>Isometric</b>Doesn't visibly move, uses <b>force</b> (pressure device): TrackPoint</div>
</div>
<div class="box mem"><b class="lab">Memory hook</b>iso-<b>TON</b>-ic = it <b>TO</b>ns of movement (moves freely). iso-<b>METRIC</b> = measures force, stays put.</div>
<h3>3D interaction and trackers</h3>
<p>3D interaction: people act in 3D space (real, virtual or mixed), and position matters to both human and machine. Examples: Apple Vision Pro, Samsung Galaxy XR.</p>
<p><b>Position trackers: 6 degrees of freedom</b> = 3 position (X, Y, Z) + 3 orientation (<b>pitch, yaw, roll</b>). Headsets track themselves with cameras and IMUs.</p>
<div class="duo">
<div><b>Locomotive devices</b>Turn real movement into virtual movement: stationary bikes, stair-climbers, treadmills</div>
<div><b>Eye tracking</b>Corneal reflection (light reflected from the cornea). Vision Pro and Galaxy XR: look to aim, pinch to select. <b>Tip: look first, act second</b>, to avoid accidental selection</div>
<div><b>Gesture recognition</b>Before: gloves, body suits. Now: cameras + AI track bare hands. Meta Neural Band reads wrist signals</div>
<div><b>Speech recognition</b>Classic: match against known words. Now: AI understands natural speech. Design: give feedback, allow correction, offer another way (noise, privacy)</div>
</div>

<h2 id="c3-wear"><span class="tag">06 · wearables &amp; beyond</span>From a computer in a shoe to smart glasses</h2>
<p>1960s: a computer hidden in a shoe. Early wearables were heavy and hidden; today they're light, wireless and fashionable: Meta Ray-Ban Display (glasses, 69 g, Neural Band + voice), Apple Vision Pro (eye, hand, voice), Samsung Galaxy XR (Android XR, Gemini).</p>
<p><b>Augmented reality path:</b> cockpit head-up displays → phone AR (Pokémon GO, navigation) → glasses and headsets.</p>
<p><b>Ubiquitous computing (Weiser, 1991):</b> computers built into everyday objects, spread through the environment, joined by wireless networks. Today: smart homes, wearables, IoT. Biometrics (fingerprint, face) help security and personalisation.</p>
<h3>Beyond WIMP</h3>
<p><b>WIMP = Windows, Icons, Menus, Pointer.</b> Nielsen (1993) post-WIMP candidates and what they became:</p>
<div class="tblwrap"><table class="tbl">
<tr><th>Nielsen (1993)</th><th>Today</th></tr>
<tr><td>Virtual realities</td><td>VR and mixed-reality headsets</td></tr>
<tr><td>Sound and speech</td><td>Voice assistants, AI voice</td></tr>
<tr><td>Pen input and gesture recognition</td><td>Stylus, touch, hand tracking</td></tr>
<tr><td>Limited artificial intelligence</td><td>Conversational AI and agents</td></tr>
<tr><td>Highly portable computers</td><td>Smartphones, watches, smart glasses</td></tr>
</table></div>
`,
  quiz: [
    {t:"mcq", q:"Which is NOT a property of direct manipulation?", o:["Objects of interest stay visible","Physical actions like drag or pinch","Fast, incremental and reversible actions","Complex commands typed with exact syntax"], a:3, why:"Direct manipulation replaces typed complex commands with physical actions on visible objects. Typed syntax is a command-language style."},
    {t:"mcq", q:"In the state-machine view of a GUI, a transition represents…", o:["An interaction state","An input event","A widget","A peripheral"], a:1, why:"State = interaction state; transition = input event. Actions run on transitions, and conditions decide whether a transition can fire."},
    {t:"order", q:"Order the events in the drag state machine, starting from Idle.", lines:["Idle: waiting","Down / Record(P1) → go to Dragging","Move / Draw(P1, current) → stay in Dragging","Up / Done(P1, current) → back to Idle"], why:"You can't drag until the button is down (record the start point). Each Move redraws while dragging. Releasing (Up) finishes the shape and returns to Idle."},
    {t:"mcq", q:"Setting a property with a slider or colour picker is which elementary task?", o:["Selection","Triggering","Specifying arguments","Transformation"], a:2, why:"Specifying arguments = setting properties (sliders, colour pickers). Transformations = move, scale, rotate. Triggering = start an action."},
    {t:"mcq", q:"Pinching to zoom and twisting to rotate a photo are which elementary task?", o:["Transformations","Scrolling","Entry","Selection"], a:0, why:"Transformations are move, scale and rotate, done with drag, pinch or twist."},
    {t:"mcq", q:"Holding Shift to type capitals is which kind of mode?", o:["Temporal","Spatial","Quasi-mode","Direct mode"], a:2, why:"A quasi-mode lasts only while you hold it. Caps Lock is temporal (stays until changed). Spatial depends on where you are."},
    {t:"mcq", q:"Selecting the eraser tool in a paint program, which stays active until you pick another tool, is a…", o:["Quasi-mode","Temporal mode","Spatial mode","Not a mode"], a:1, why:"Temporal modes persist until you change them, like Caps Lock or a selected tool. The risk is that users forget the mode, so show it clearly."},
    {t:"mcq", q:"What is the main usability problem with modes, and how do we reduce it?", o:["They are slow; remove animation","Users forget the current mode and make errors; show the mode clearly","They use too much memory; cache them","They need special hardware; use software keyboards"], a:1, why:"Mode errors happen when the same input means different things and the user has forgotten which mode is on. Clear mode indicators reduce them."},
    {t:"mcq", q:"A peripheral is best defined as…", o:["Any part of the CPU","A device connected to a host computer that is not an integral part of it","Only an output device","The operating system driver"], a:1, why:"A peripheral connects to a host, isn't integral to it, extends its abilities and often depends on it. It can be input, output or storage."},
    {t:"mcq", q:"An external SSD is which kind of peripheral?", o:["Input","Output","Storage","Control"], a:2, why:"SSDs, USB flash drives and external drives are storage peripherals."},
    {t:"mcq", q:"A key press is ______, mouse position is ______.", o:["continuous, discrete","discrete, continuous","absolute, relative","isometric, isotonic"], a:1, why:"Key presses are discrete events. Mouse position is continuous: digitised, but fast enough to look continuous."},
    {t:"mcq", q:"How many degrees of freedom does a position tracker provide, and what are they?", o:["2: X and Y","3: X, Y, Z","6: X, Y, Z plus pitch, yaw, roll","4: X, Y, Z, time"], a:2, why:"6 DOF = 3 for position (X, Y, Z) + 3 for orientation (pitch, yaw, roll)."},
    {t:"mcq", q:"A 27-inch monitor is 2560 × 1440. What is its approximate pixel density?", o:["≈ 81 ppi","≈ 92 ppi","≈ 109 ppi","≈ 431 ppi"], a:2, why:"Diagonal px = √(2560² + 1440²) = √(6,553,600 + 2,073,600) = √8,627,200 ≈ 2937. Then 2937 ÷ 27 ≈ 109 ppi."},
    {t:"mcq", q:"Using the slide's example, a 24-inch 1920 × 1080 monitor has about…", o:["92 ppi","2203 ppi","45 ppi","431 ppi"], a:0, why:"√(1920² + 1080²) ≈ 2203 px on the diagonal, and 2203 ÷ 24 ≈ 92 ppi. 2203 is the diagonal pixel count, not the density."},
    {t:"mcq", q:"How many colours can a 16-bit colour depth display show?", o:["256","65,536","16.7 million","4,096"], a:1, why:"2^16 = 65,536. 8 bits = 256; 24 bits ≈ 16.7 million; 32 bits adds 256 levels of transparency."},
    {t:"mcq", q:"In which display technology does each pixel make its own light?", o:["LCD","Mini-LED","OLED / AMOLED","CRT"], a:2, why:"OLED pixels emit their own light. LCD and Mini-LED need a backlight."},
    {t:"mcq", q:"LTPO panels change their refresh rate from 1 Hz to 120 Hz mainly to…", o:["Increase colour depth","Save battery","Improve touch accuracy","Increase resolution"], a:1, why:"LTPO varies the refresh rate so static content uses less power, which saves battery."},
    {t:"mcq", q:"A touchscreen is ______; a mouse is ______.", o:["relative, absolute","absolute, relative","isometric, elastic","order 1, order 0"], a:1, why:"Absolute devices send a position (x, y): touchscreens, tablets, pens. Relative devices send movement (dx, dy): mice, joysticks, trackballs."},
    {t:"mcq", q:"Pushing a joystick further makes the cursor move faster. This is…", o:["Order 0 control","Order 1 control","Isotonic","Absolute"], a:1, why:"Order 1 means the device controls the speed of the object. Order 0 means device movement equals object movement (mouse)."},
    {t:"mcq", q:"A laptop TrackPoint barely moves but responds to how hard you push. It is…", o:["Isotonic","Elastic","Isometric","Locomotive"], a:2, why:"Isometric (pressure/force) devices don't perceptibly move and use force. Isotonic devices move freely (mouse); elastic use position or force and spring back (joystick)."},
    {t:"mcq", q:"Treadmills and stationary bikes used in VR are examples of…", o:["Position trackers","Locomotive devices","Haptic devices","Eye trackers"], a:1, why:"Locomotive devices turn real movement into movement in virtual space, which feels natural."},
    {t:"mcq", q:"What design tip is given for eye-tracking interfaces?", o:["Select whatever the user looks at immediately","Let users look first and act second (e.g. pinch) so they don't select by accident","Avoid feedback","Use only voice"], a:1, why:"Selecting on gaze alone causes accidental selections. Vision Pro and Galaxy XR use 'look to aim, pinch to select'."},
    {t:"mcq", q:"WIMP stands for…", o:["Windows, Icons, Menus, Pointer","Web, Input, Mouse, Program","Widgets, Interfaces, Modes, Peripherals","Windows, Internet, Media, Phone"], a:0, why:"WIMP = Windows, Icons, Menus, Pointer. Nielsen (1993) proposed post-WIMP candidates such as VR, speech, pen and gesture."},
    {t:"mcq", q:"\"Computers will be built into everyday objects and spread through the environment, joined by wireless networks.\" Who and what?", o:["Nielsen 1993, post-WIMP","Weiser 1991, ubiquitous computing","Myers 1994, UI tools","Reenskaug 1979, MVC"], a:1, why:"Mark Weiser (1991) described ubiquitous computing; today: smart homes, wearables and IoT."},
    {t:"mcq", q:"A chord keyboard…", o:["Has 100+ keys","Uses only 4 or 5 keys pressed together for fast one-handed input","Is the same as T9","Is 10–15% faster than QWERTY"], a:1, why:"Chord keyboards press 4–5 keys together. The 10–15% speed claim belongs to the Dvorak layout."},
    {t:"tf", q:"Haptic feedback means the system communicates through vibration, force or surface changes that the user can feel.", a:true, why:"Tactile is the sense of pressure on the skin; haptic feedback uses vibration, force or surface change so users can feel the system."},

    {t:"order", java:true, q:"Order these Swing mouse handlers by WHEN they run during one drag (the state machine Down → Move → Up).", lines:["public void mousePressed(MouseEvent e) { p1 = e.getPoint(); dragging = true; }","public void mouseDragged(MouseEvent e) { current = e.getPoint(); repaint(); }","public void mouseReleased(MouseEvent e) { dragging = false; shapes.add(new Line(p1, e.getPoint())); }"], why:"mousePressed is the Down transition (Record P1). mouseDragged fires repeatedly for every Move (Draw P1→current). mouseReleased is Up (Done), returning to Idle."},
    {t:"mcq", java:true, q:"This drawing panel never draws while dragging. Why?", code:"panel.addMouseListener(new MouseAdapter() {\n    public void mousePressed(MouseEvent e)  { p1 = e.getPoint(); }\n    public void mouseDragged(MouseEvent e)  { current = e.getPoint(); repaint(); }\n});", o:["mouseDragged belongs to MouseMotionListener, so it must be added with addMouseMotionListener","repaint() can't be called in a handler","MouseAdapter can't be used","p1 must be static"], a:0, why:"mouseDragged is a MouseMotionListener method. Registering the adapter only with addMouseListener means drag events are never delivered. Add panel.addMouseMotionListener(adapter) too."},
    {t:"mcq", java:true, q:"In this code, holding Shift while clicking adds to the selection instead of replacing it. What kind of mode is this?", code:"public void mouseClicked(MouseEvent e) {\n    if (e.isShiftDown()) selection.add(item);\n    else { selection.clear(); selection.add(item); }\n}", o:["Temporal mode","Spatial mode","Quasi-mode","No mode"], a:2, why:"The behaviour changes only while Shift is held, which makes it a quasi-mode. Quasi-modes cause fewer mode errors because the user is physically holding the key."},
    {t:"mcq", java:true, q:"A paint app stores the current tool in a field. What is the best way to reduce mode errors?", code:"String tool = \"PEN\";\npenBtn.addActionListener(e -> tool = \"PEN\");\neraserBtn.addActionListener(e -> tool = \"ERASER\");", o:["Hide the tool buttons after one click","Update a visible label, e.g. modeLabel.setText(\"Mode: \" + tool)","Change tool randomly","Use a while loop to check the tool"], a:1, why:"Tool selection is a temporal mode. The slides say to show the current mode clearly so users don't forget it; a label or a highlighted button does that."},
    {t:"mcq", java:true, q:"Which Swing listener method fits a DISCRETE input event from the keyboard?", o:["keyPressed(KeyEvent e)","mouseMoved(MouseEvent e)","mouseDragged(MouseEvent e)","stateChanged(ChangeEvent e)"], a:0, why:"Key presses are discrete. mouseMoved and mouseDragged report continuous mouse position."},
    {t:"mcq", java:true, q:"A JSlider lets the user set the brush size from 1 to 50. Which elementary task does it support?", code:"JSlider size = new JSlider(1, 50, 10);\nsize.addChangeListener(e -> brush = size.getValue());", o:["Triggering","Specifying arguments","Scrolling","Entry"], a:1, why:"Sliders set properties, which the slides call 'specifying arguments'. Note JSlider uses a ChangeListener (stateChanged), not an ActionListener."},

    {t:"written", q:"Differentiate the three kinds of interaction mode, with examples, and state the problem with modes.", pts:["Temporal: stays until changed (Caps Lock, selected tool)","Spatial: depends on location (which window or area)","Quasi-mode: lasts while held (Shift)","Problem: users forget the mode and make mode errors; show the current mode clearly"]},
    {t:"written", q:"Explain how control devices are classified (absolute/relative, order, isotonic/elastic/isometric).", pts:["Absolute: send position (touchscreen, tablet, pen); Relative: send movement dx,dy (mouse, joystick, trackball)","Order 0: device movement = object movement (mouse); Order 1: device controls speed (joystick)","Isotonic: free-moving, position (mouse); Elastic: position or force, springs back (joystick); Isometric: force, doesn't move (TrackPoint)"]},
    {t:"written", q:"Calculate the ppi of a 15.6-inch laptop at 1920 × 1080. Show your working.", pts:["Diagonal px = √(1920² + 1080²) = √(3,686,400 + 1,166,400) = √4,852,800 ≈ 2203 px","ppi = 2203 ÷ 15.6 ≈ 141 ppi"]}
  ]
},

/* =========================================================== CHAPTER 4 */
{
  id: "c4", num: "Chapter 4", color: "--c4",
  title: "Software Architecture & MVC",
  blurb: "Model, View, Controller, the 7-step flow, Swing's JTable/TableModel, and MVP/MVVM/MVI.",
  notes: `
<h2 id="c4-why"><span class="tag">01 · why architecture?</span>A system that works is not enough</h2>
<p>Every interactive system has a <b>front end</b> (output and input) and a <b>back end</b> (computation, communication, data). The big question: <b>how do we connect them so each can change without breaking the other?</b></p>
<div class="duo">
<div><b>Music store app</b>Front: browse and play. Back: albums, artists, server, sales, security.</div>
<div><b>3D design tool</b>Front: drawing view. Back: geometry, transformations, rendering, storage.</div>
<div><b>Spreadsheet</b>Front: the grid. Back: tabular structure, storage, data access.</div>
</div>
<p>In its life a system is repaired, enhanced, debugged and grown. Every change means editing, reviewing and testing code, which costs time and money.</p>
<div class="box story"><b class="lab">The slide in capitals</b>A well-designed system works correctly <b>and</b> lets us change it with <b>LESS EFFORT</b>.</div>

<h2 id="c4-mvc"><span class="tag">02 · the three roles</span>Model, View, Controller</h2>
<div class="duo">
<div><b>Model</b>The <b>data</b> and how we treat it: business rules, logic. <b>Knows nothing about the screen</b>, so it can be tested without a UI. <i>e.g. BankAccount with balance, deposit(), withdraw()</i></div>
<div><b>View</b>How data is <b>represented</b> to the user: chart, table, diagram. <b>Many views, one model</b>. <i>e.g. same sales data as a bar chart and a table</i></div>
<div><b>Controller</b>How the app <b>reacts to user input</b>: reads clicks, decides what happens, calls the model or picks another view. <i>e.g. Save click → model.save()</i></div>
</div>
<p>MVC is both a <b>design pattern</b> (a standard, language-independent solution to a common design problem) and an <b>architecture</b> (a way to structure an application).</p>
<h3>Where it comes from</h3>
<p><b>1979, Xerox PARC.</b> <b>Trygve Reenskaug</b> created MVC while visiting PARC; first used with <b>Smalltalk</b> and linked to OOP. Purpose: bridge the gap between the user's <b>mental model</b> and the computer's digital model. First name: <b>Model-View-Editor</b>; after discussion with Adele Goldberg it became Model-View-Controller.</p>
<h3>Analogies (they love these in exams)</h3>
<div class="tblwrap"><table class="tbl">
<tr><th></th><th>Restaurant</th><th>Car</th></tr>
<tr><td>User</td><td>Customer</td><td>Driver</td></tr>
<tr><td>Controller</td><td><b>Waiter</b>: takes the order, passes it on</td><td><b>Steering wheel &amp; pedals</b></td></tr>
<tr><td>View</td><td><b>Menu and the served dish</b></td><td><b>Dashboard</b></td></tr>
<tr><td>Model</td><td><b>Kitchen</b>: the real work</td><td><b>Engine &amp; fuel level</b></td></tr>
</table></div>

<h3>How they connect</h3>
<p>User <b>uses</b> the Controller → Controller <b>manipulates</b> the Model → Model <b>updates</b> the View → User <b>sees</b> the View.</p>
<div class="duo">
<div><b>Good structure</b>Each class belongs to exactly <b>one</b> role. Links between groups are few and clear.</div>
<div><b>Bad structure</b>Classes mix roles; links cross everywhere (model → view…). One change breaks many parts.</div>
</div>
<p><b>Who may talk to whom?</b> Model and View normally <b>don't access each other directly</b>; the controller talks to both. Restricted access means <b>low coupling</b>, so changes stay local.</p>

<h3>The 7 steps: click Next to follow the message</h3>
<div class="stepper" data-widget="mvc" data-steps='[["user","<b>1.</b> User acts on the <b>View</b> (click, tap, type)."],["view","<b>2.</b> View <b>notifies the Controller</b> of the input."],["controller","<b>3.</b> Controller <b>changes the Model</b>, or selects another view."],["model","<b>4.</b> Model does its <b>internal operations</b>."],["model","<b>5.</b> Model <b>notifies</b> that its state changed."],["view","<b>6.</b> View <b>requests the new state</b> from the Model."],["user","<b>7.</b> View <b>refreshes</b> what the user sees."]]'></div>
<div class="box mem"><b class="lab">Memory hook</b>"<b>A</b>ct, <b>N</b>otify, <b>C</b>hange, <b>O</b>perate, <b>N</b>otify, <b>R</b>equest, <b>R</b>efresh": <b>"A New Car Only Needs Regular Repairs"</b>.</div>

<h3>Advantages vs disadvantages</h3>
<div class="duo">
<div><b>Advantages</b><ul><li>Easy to maintain, extend and grow</li><li><b>Testable</b>: test the model without a UI (great for TDD)</li><li>Supports new clients (web, mobile)</li><li><b>Parallel work</b>: teams build M, V, C at once</li><li>Less complexity: three units instead of one block</li><li>Works for large design + dev teams</li></ul></div>
<div><b>Disadvantages</b><ul><li>Framework navigation can be complex</li><li>More files, more indirection</li><li>Data handling can be less efficient</li><li><b>No formal support for validation</b></li><li>Hard to support new UI technology</li><li>Need to know several technologies</li></ul></div>
</div>

<h2 id="c4-ex"><span class="tag">03 · examples</span>Temperature converter, Swing tables, the web</h2>
<h3>Temperature converter</h3>
<div class="duo">
<div><b>TemperatureModel</b>celsius, fahrenheit<br>setCelsiusValue(), setFahrenheitValue()<br>getCelsiusValue(), getFahrenheitValue()</div>
<div><b>TemperatureView</b>Celsius text field, Fahrenheit text field, Reset button, Close button</div>
<div><b>TemperatureController</b>Listens to the text fields and buttons; holds the model and views; bind(view)</div>
</div>
<p>Flow: user types 100 °C → controller gets input → controller modifies model → model notifies controller → controller asks views to update → Fahrenheit shows 212 °F.</p>
<div class="box tip"><b class="lab">Why pass "caller"?</b><code class="i">setCelsiusValue(value, caller)</code> tells the controller which view sent the change. That view is <b>skipped</b> when updating, which <b>avoids an endless update loop</b>.</div>
<p><b>Notice:</b> the view never changes the model; the model never touches the text fields. Only the controller connects them.</p>
<pre class="code">// ---------- MODEL: data + rules, no Swing imports ----------
class TemperatureModel {
    private double celsius = 0;
    private java.util.List&lt;Runnable&gt; listeners = new java.util.ArrayList&lt;&gt;();
    void subscribe(Runnable r)        { listeners.add(r); }
    void setCelsius(double c)         { celsius = c; listeners.forEach(Runnable::run); } // notify
    double getCelsius()               { return celsius; }
    double getFahrenheit()            { return celsius * 9 / 5 + 32; }
}

// ---------- VIEW: only widgets ----------
class TemperatureView extends JFrame {
    JTextField celsiusField = new JTextField(6);
    JLabel fahrenheitLabel  = new JLabel("32.0 F");
    JButton resetBtn        = new JButton("Reset");
    TemperatureView() {
        setLayout(new FlowLayout());
        add(celsiusField); add(fahrenheitLabel); add(resetBtn);
        pack();
    }
}

// ---------- CONTROLLER: connects them ----------
class TemperatureController {
    TemperatureController(TemperatureModel m, TemperatureView v) {
        m.subscribe(() -> v.fahrenheitLabel.setText(m.getFahrenheit() + " F"));
        v.celsiusField.addActionListener(e -> {
            try { m.setCelsius(Double.parseDouble(v.celsiusField.getText())); }
            catch (NumberFormatException ex) { v.fahrenheitLabel.setText("Number only"); }
        });
        v.resetBtn.addActionListener(e -> { m.setCelsius(0); v.celsiusField.setText("0"); });
    }
}

// ---------- MAIN ----------
TemperatureModel model = new TemperatureModel();
TemperatureView view   = new TemperatureView();
new TemperatureController(model, view);
view.setVisible(true);</pre>

<h3>MVC in Java Swing</h3>
<ul>
<li><b>Not strict:</b> Swing doesn't fully separate M, V and C, even for simple widgets.</li>
<li><b>Model</b> = the abstract behaviour/data of the widget. <b>View + Controller</b> = Look and Feel plus listeners (merged).</li>
<li><b>Hidden by default:</b> JButton, JLabel and JPanel get a default model you rarely touch.</li>
</ul>
<div class="tblwrap"><table class="tbl">
<tr><th>Kind</th><th>Interfaces</th><th>Default classes</th></tr>
<tr><td>Look and Feel</td><td>ButtonModel, ListSelectionModel</td><td>DefaultButtonModel, DefaultListSelectionModel</td></tr>
<tr><td>Data</td><td>ListModel, TableModel, TreeModel</td><td>DefaultListModel, DefaultTableModel, DefaultTreeModel</td></tr>
<tr><td>Look and Feel + Data</td><td>BoundedRangeModel (<b>JSlider</b>)</td><td>both in one model</td></tr>
</table></div>
<pre class="code">// JTable = VIEW, TableModel = MODEL
class MyTableModel extends AbstractTableModel {
    private String[] columnNames = {"Name", "Mark"};
    private Object[][] data = {{"Ali", 80}, {"Siti", 92}};
    public int getColumnCount()          { return columnNames.length; }
    public int getRowCount()             { return data.length; }
    public String getColumnName(int col) { return columnNames[col]; }
    public Object getValueAt(int row, int col) { return data[row][col]; }
}

TableModel dataModel = new MyTableModel();
JTable table = new JTable(dataModel);           // view asks the model for cells
JScrollPane scrollpane = new JScrollPane(table);
frame.add(scrollpane);</pre>
<div class="box tip"><b class="lab">Must-know</b><code class="i">AbstractTableModel</code> requires 3 methods: <b>getRowCount()</b>, <b>getColumnCount()</b>, <b>getValueAt(row, col)</b>. <code class="i">getColumnName</code> is optional (default names are A, B, C…). After changing data, call <code class="i">fireTableDataChanged()</code> so the JTable refreshes (step 5: model notifies).</div>
<p><b>Qt / PySide6</b> does the same: <code class="i">QTableView</code> shows data, <code class="i">QAbstractTableModel</code> supplies rows, columns and cell values. JTable + TableModel ≈ QTableView + table model.</p>

<h3>The web</h3>
<div class="duo">
<div><b>HTML = content</b>The skeleton</div>
<div><b>CSS = style</b>The skin</div>
<div><b>JavaScript = behaviour</b>Reacts to clicks and typing</div>
</div>
<p>That's separation of concerns, like MVC (only a loose analogy). On the server: browser request → <b>controller</b> → asks <b>model</b> (database) → <b>view</b> (template) builds the page → response. Rails, ASP.NET MVC, <b>Spring MVC</b>, Laravel; <b>Django</b> calls the view a <b>template</b>. Web MVC is called <b>Model 2</b> and differs from the 1979 Smalltalk design.</p>

<h2 id="c4-after"><span class="tag">04 · after MVC</span>The MVC family</h2>
<div class="tblwrap"><table class="tbl">
<tr><th>Pattern</th><th>Middle part</th><th>Main idea</th><th>Common in</th></tr>
<tr><td>MVC</td><td>Controller</td><td>Turns input into commands</td><td>Smalltalk, Cocoa, web</td></tr>
<tr><td>MVP</td><td>Presenter</td><td>Presenter updates a very simple view</td><td>Older Android, testable UIs</td></tr>
<tr><td>MVVM</td><td>ViewModel</td><td>ViewModel holds UI state; view <b>observes</b> it</td><td>WPF, SwiftUI, Compose, Vue</td></tr>
<tr><td>MVI</td><td>State + Intents</td><td>One <b>immutable</b> UI state; user actions are <b>intents</b></td><td>Compose, Redux-style</td></tr>
</table></div>
<div class="box story"><b class="lab">Modern rule</b><b>State flows down, events flow up.</b> One-way data flow with one source of truth, recommended by Google for Android, and used by Compose, SwiftUI, Flutter and React. Declarative UI = function of state; one immutable state makes debugging easier.</div>
<h3>Is MVC the solution?</h3>
<p><b>No.</b> It doesn't remove complexity, doesn't solve reuse or flexibility, and doesn't guarantee decoupled code. It's a <b>pattern</b>: patterns don't solve problems, they <b>help developers</b>. Learn the idea, not one fixed recipe.</p>
`,
  quiz: [
    {t:"mcq", q:"In MVC, which part holds the application data, business rules and logic?", o:["View","Controller","Model","Template"], a:2, why:"The Model is the central component: data, rules and functions. It knows nothing about the screen."},
    {t:"mcq", q:"Why can the Model be tested without a user interface?", o:["Because it contains all the widgets","Because it knows nothing about how data is shown","Because it runs on the server","Because it has no data"], a:1, why:"The model doesn't care how data is displayed, so you can test its rules (e.g. withdraw() can't go negative) without any screen."},
    {t:"mcq", q:"A Save button click becomes the command model.save(). Which role does this?", o:["Model","View","Controller","Look and Feel"], a:2, why:"The controller accepts input and turns it into commands for the model or view. This is the slide's example."},
    {t:"mcq", q:"In the restaurant analogy, the waiter is the…", o:["Model","View","Controller","User"], a:2, why:"Waiter = controller (takes the order and passes it on). Kitchen = model, menu and dish = view, customer = user."},
    {t:"mcq", q:"In the car analogy, the dashboard is the…", o:["Model","View","Controller","User"], a:1, why:"The dashboard shows information, so it's the view. Steering wheel and pedals = controller; engine and fuel = model; driver = user."},
    {t:"mcq", q:"Who created MVC, where, and when?", o:["Adele Goldberg, Apple, 1984","Trygve Reenskaug, Xerox PARC, 1979","Brad Myers, CMU, 1994","Mark Weiser, Xerox PARC, 1991"], a:1, why:"Trygve Reenskaug created MVC in 1979 while visiting Xerox PARC, first with Smalltalk. Adele Goldberg helped choose the name."},
    {t:"mcq", q:"What was MVC's first name?", o:["Model-View-Presenter","Model-View-Editor","Model-View-ViewModel","Model-Template-View"], a:1, why:"It was first Model-View-Editor; after discussion with Adele Goldberg and others it became Model-View-Controller."},
    {t:"mcq", q:"In classic MVC, do the Model and View access each other directly?", o:["Yes, always","Normally no; the Controller talks to both","Only the model calls the view","Only through the database"], a:1, why:"Normally they don't access each other directly. Restricting access keeps coupling low so changes stay local."},
    {t:"order", q:"Order the 7 MVC interaction steps.", lines:["User acts on the view (click, tap, type)","View notifies the controller of the input","Controller changes the model, or selects another view","Model does its internal operations","Model notifies that its state changed","View requests the new state from the model","View refreshes what the user sees"], why:"Input travels user → view → controller → model. Then the change travels back: the model notifies, the view asks for the new state and redraws. Memory hook: 'A New Car Only Needs Regular Repairs'."},
    {t:"mcq", q:"Which is an ADVANTAGE of MVC?", o:["Fewer files","Teams can build model, view and controller in parallel","Built-in validation","Very easy framework navigation"], a:1, why:"Parallel development is a listed advantage. More files and complex navigation are disadvantages, and MVC has no formal support for validation."},
    {t:"mcq", q:"Which is a DISADVANTAGE of MVC?", o:["Easy to maintain","Testable model","No formal support for validation","Supports new clients"], a:2, why:"Lack of formal validation support is a listed disadvantage, along with complexity, more files and indirection, and needing several technologies."},
    {t:"mcq", q:"In the temperature converter, why does setCelsiusValue(value, caller) take a caller argument?", o:["To log who changed the value","So the view that sent the change is skipped when updating, avoiding an endless update loop","To convert units","To make the model aware of Swing"], a:1, why:"If the Celsius field were updated after it sent the change, it could fire another change event, forever. Skipping the caller breaks that loop."},
    {t:"mcq", q:"User types 100 into the Celsius field. What does the Fahrenheit field show?", o:["100 °F","180 °F","212 °F","373 °F"], a:2, why:"F = C × 9/5 + 32 = 100 × 1.8 + 32 = 212."},
    {t:"mcq", q:"In Swing, which model type does JSlider use (Look and Feel + Data combined)?", o:["ButtonModel","TableModel","BoundedRangeModel","TreeModel"], a:2, why:"BoundedRangeModel holds a value within min/max for JSlider, combining look-and-feel state and data. ButtonModel is look-and-feel only; TableModel is data only."},
    {t:"mcq", q:"Which statement about MVC in Java Swing is TRUE?", o:["Swing separates M, V and C strictly","View and Controller are merged in the Look and Feel plus listeners","Swing has no models","Every widget needs a model written by you"], a:1, why:"Swing isn't strict MVC. The model is the widget's abstract behaviour; view and controller are combined. JButton and JLabel get a default model automatically."},
    {t:"mcq", q:"Which of these is a DATA model interface in Swing?", o:["ButtonModel","ListSelectionModel","TableModel","BoundedRangeModel"], a:2, why:"Data models: ListModel, TableModel, TreeModel. Look-and-feel models: ButtonModel, ListSelectionModel. BoundedRangeModel is both."},
    {t:"mcq", q:"In web pages, which pairing is correct?", o:["HTML = style, CSS = content","HTML = content, CSS = style, JavaScript = behaviour","JavaScript = content","CSS = behaviour"], a:1, why:"HTML is the skeleton (content), CSS the skin (style), JavaScript the behaviour. This is separation of concerns, a loose analogy to MVC."},
    {t:"mcq", q:"Django uses the MVC idea but calls the view role a…", o:["Presenter","Template","ViewModel","Intent"], a:1, why:"Django names the view role a 'template'. Web MVC (Model 2) differs from the original 1979 version."},
    {t:"mcq", q:"In which pattern does the view OBSERVE a ViewModel that holds UI state?", o:["MVC","MVP","MVVM","MVI"], a:2, why:"MVVM: the ViewModel holds UI state and the view observes it (WPF, SwiftUI, Compose, Vue). MVP's presenter pushes updates to a simple view. MVI uses immutable state and intents."},
    {t:"mcq", q:"\"One immutable UI state; user actions are intents\" describes…", o:["MVP","MVI","MVC","Model 2"], a:1, why:"MVI = Model-View-Intent: a single immutable state, with user actions modelled as intents (Redux style)."},
    {t:"mcq", q:"The modern rule for UI architecture is…", o:["Events flow down, state flows up","State flows down, events flow up","Everything flows through the database","The view owns the state"], a:1, why:"One-way data flow: state flows down to the UI, events flow up to the state holder, with one source of truth."},
    {t:"tf", q:"MVC guarantees decoupled code and removes code complexity.", a:false, why:"The slides say no: MVC doesn't remove complexity, solve reuse or guarantee decoupling. It's a pattern that helps developers."},

    {t:"order", java:true, q:"Order the lines to display data in a JTable using a custom TableModel.", lines:["class MyTableModel extends AbstractTableModel { ... }","TableModel dataModel = new MyTableModel();","JTable table = new JTable(dataModel);","JScrollPane scrollpane = new JScrollPane(table);","frame.add(scrollpane);"], why:"Define the model class, create a model object, give it to the JTable (the view), wrap the table in a JScrollPane for scroll bars and headers, then add the scroll pane to the frame."},
    {t:"mcq", java:true, q:"Which THREE methods must a subclass of AbstractTableModel implement?", o:["getRowCount(), getColumnCount(), getValueAt(row, col)","getColumnName(), setValueAt(), isCellEditable()","paint(), repaint(), update()","actionPerformed(), getSource(), fire()"], a:0, why:"AbstractTableModel leaves getRowCount, getColumnCount and getValueAt abstract. getColumnName, setValueAt and isCellEditable have default versions you can override."},
    {t:"mcq", java:true, q:"Which MVC role does this class play?", code:"class BankAccount {\n    private double balance;\n    void deposit(double amt)  { balance += amt; }\n    void withdraw(double amt) {\n        if (amt > balance) throw new IllegalArgumentException();\n        balance -= amt;\n    }\n    double getBalance() { return balance; }\n}", o:["Model","View","Controller","None"], a:0, why:"It holds data (balance) and business rules (no overdraft), with no widgets or listeners. That's the slide's bank account Model example."},
    {t:"mcq", java:true, q:"What MVC rule does this code break?", code:"class TemperatureModel {\n    JTextField fahrenheitField;   // reference to a widget!\n    void setCelsius(double c) {\n        celsius = c;\n        fahrenheitField.setText(String.valueOf(c * 9 / 5 + 32));\n    }\n}", o:["None, this is correct","The model touches the view directly; the model should not know about text fields","The controller is missing an ActionListener","setText is deprecated"], a:1, why:"'The model never touches the text fields.' Here the model depends on Swing, so it can't be tested without a UI and can't support a second view. It should notify listeners and let the controller update the view."},
    {t:"order", java:true, q:"Order the main method that wires up the temperature converter with MVC.", lines:[["TemperatureModel model = new TemperatureModel();",0],["TemperatureView view = new TemperatureView();",0],["TemperatureController controller = new TemperatureController(model, view);",1],["view.setVisible(true);",2]], why:"The model and view are independent (either can be created first). The controller needs both, because it holds the model and views and binds the listeners, so it comes after. Show the window last, once everything is connected."},
    {t:"mcq", java:true, q:"After adding a row to the data inside a custom AbstractTableModel, the JTable doesn't update. What should the model call?", o:["table.repaint() from the model","fireTableDataChanged() (or fireTableRowsInserted)","System.gc()","setVisible(true)"], a:1, why:"This is step 5, 'model notifies that its state changed'. The fireTable... methods notify the JTable, which then asks the model for the new values (step 6). The model shouldn't hold a reference to the table."},
    {t:"mcq", java:true, q:"In this code, which object is acting as the CONTROLLER?", code:"JSlider slider = new JSlider(0, 100);           // A\nVolumeModel vol = new VolumeModel();          // B\nslider.addChangeListener(e ->                 // C\n    vol.setLevel(slider.getValue()));\nJLabel lbl = new JLabel();                    // D\nvol.subscribe(() -> lbl.setText(vol.getLevel() + \"%\"));", o:["A: the JSlider","B: VolumeModel","C: the ChangeListener lambda that calls vol.setLevel(...)","D: the JLabel"], a:2, why:"The listener takes user input from the slider and turns it into a command for the model, which is the controller's job. The slider and label are views, and VolumeModel is the model."},
    {t:"mcq", java:true, q:"You want to add a bar chart showing the same student marks already shown in a JTable. Following MVC, what must change in the model?", o:["Copy the data into the chart class","Nothing in the data; register the chart as another listener/view of the same model","Merge the chart and table into one class","Rewrite the model in the chart"], a:1, why:"'Many views, one model.' The new view subscribes to the same model, which is the payoff of low coupling."},

    {t:"written", q:"Explain the 7 steps of MVC interaction.", pts:["1 User acts on the view","2 View notifies the controller","3 Controller changes the model (or selects another view)","4 Model does internal operations","5 Model notifies that its state changed","6 View requests new state from model","7 View refreshes for the user"]},
    {t:"written", q:"Describe MVC using the restaurant (or car) analogy, and list three advantages and three disadvantages.", pts:["Restaurant: customer = user, waiter = controller, menu/dish = view, kitchen = model (car: driver, wheel/pedals, dashboard, engine)","Advantages: maintainable/extendable, testable model, parallel work, new clients, less complexity","Disadvantages: complex framework navigation, more files and indirection, less efficient data handling, no formal validation, needs several technologies"]},
    {t:"written", q:"Explain how Java Swing applies MVC, using JTable as an example.", pts:["Swing is not strict MVC: view and controller are merged (Look and Feel + listeners)","Each widget has a model; JButton etc. get a default model","JTable is the view; TableModel (e.g. AbstractTableModel subclass) is the model supplying getRowCount, getColumnCount, getValueAt","Model types: ButtonModel/ListSelectionModel (L&F), ListModel/TableModel/TreeModel (data), BoundedRangeModel (both, JSlider)"]}
  ]
}
];
