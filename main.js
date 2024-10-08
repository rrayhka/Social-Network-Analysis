// initialize global variables.
var edges;
var nodes;
var allNodes;
var allEdges;
var nodeColors;
var originalNodes;
var network;
var container;
var options, data;
var filter = {
    item: "",
    property: "",
    value: [],
};

// This method is responsible for drawing the graph, returns the drawn network
function drawGraph() {
    var container = document.getElementById("mynetwork");
    // parsing and collecting nodes and edges from the python
    nodes = new vis.DataSet([
        { color: "#1f77b4", id: "Widiya", label: "Widiya", shape: "dot" },
        { color: "#1f77b4", id: "Malik", label: "Malik", shape: "dot" },
        {
            color: "#1f77b4",
            id: "Adi Sahrul",
            label: "Adi Sahrul",
            shape: "dot",
        },
        { color: "#1f77b4", id: "Ali", label: "Ali", shape: "dot" },
        { color: "#aec7e8", id: "Zakaria", label: "Zakaria", shape: "dot" },
        { color: "#aec7e8", id: "Sabil", label: "Sabil", shape: "dot" },
        { color: "#aec7e8", id: "Hanafi", label: "Hanafi", shape: "dot" },
        { color: "#aec7e8", id: "Faqih", label: "Faqih", shape: "dot" },
        { color: "#ff7f0e", id: "Ilham", label: "Ilham", shape: "dot" },
        { color: "#ff7f0e", id: "Mahreza", label: "Mahreza", shape: "dot" },
        {
            color: "#ffbb78",
            id: "Firmansyah",
            label: "Firmansyah",
            shape: "dot",
        },
        { color: "#ff7f0e", id: "Hendra", label: "Hendra", shape: "dot" },
        { color: "#2ca02c", id: "Ronggo", label: "Ronggo", shape: "dot" },
        { color: "#2ca02c", id: "Akhyar", label: "Akhyar", shape: "dot" },
        { color: "#2ca02c", id: "Agus", label: "Agus", shape: "dot" },
        {
            color: "#ff7f0e",
            id: "Habiburrochman",
            label: "Habiburrochman",
            shape: "dot",
        },
        { color: "#ff7f0e", id: "Anam", label: "Anam", shape: "dot" },
        {
            color: "#ff7f0e",
            id: "Mishbahus",
            label: "Mishbahus",
            shape: "dot",
        },
        { color: "#aec7e8", id: "Wafda", label: "Wafda", shape: "dot" },
        { color: "#aec7e8", id: "Faisal", label: "Faisal", shape: "dot" },
        { color: "#98df8a", id: "Bagus", label: "Bagus", shape: "dot" },
        { color: "#98df8a", id: "Glendy", label: "Glendy", shape: "dot" },
        {
            color: "#98df8a",
            id: "Andre Eka",
            label: "Andre Eka",
            shape: "dot",
        },
        { color: "#98df8a", id: "Naufal", label: "Naufal", shape: "dot" },
        { color: "#d62728", id: "Hera", label: "Hera", shape: "dot" },
        { color: "#2ca02c", id: "Dimas", label: "Dimas", shape: "dot" },
        { color: "#2ca02c", id: "Alivian", label: "Alivian", shape: "dot" },
        { color: "#2ca02c", id: "Ariek", label: "Ariek", shape: "dot" },
        {
            color: "#ff9896",
            id: "Wahyu Cahyanto",
            label: "Wahyu Cahyanto",
            shape: "dot",
        },
        { color: "#9467bd", id: "Ramadani", label: "Ramadani", shape: "dot" },
        { color: "#9467bd", id: "Evi", label: "Evi", shape: "dot" },
        { color: "#9467bd", id: "Erwin", label: "Erwin", shape: "dot" },
        {
            color: "#ff9896",
            id: "Adi Prawono",
            label: "Adi Prawono",
            shape: "dot",
        },
        { color: "#ffbb78", id: "Izzul", label: "Izzul", shape: "dot" },
        {
            color: "#ffbb78",
            id: "Frederico",
            label: "Frederico",
            shape: "dot",
        },
        { color: "#ffbb78", id: "Yusron", label: "Yusron", shape: "dot" },
        { color: "#ffbb78", id: "Rafiq", label: "Rafiq", shape: "dot" },
        { color: "#c5b0d5", id: "Ramadika", label: "Ramadika", shape: "dot" },
        { color: "#c5b0d5", id: "Anandya", label: "Anandya", shape: "dot" },
        { color: "#c5b0d5", id: "Hafidz", label: "Hafidz", shape: "dot" },
        { color: "#9467bd", id: "Reza", label: "Reza", shape: "dot" },
        { color: "#9467bd", id: "Rizal", label: "Rizal", shape: "dot" },
        { color: "#9467bd", id: "Rosi", label: "Rosi", shape: "dot" },
        {
            color: "#9467bd",
            id: "Adi Rahman",
            label: "Adi Rahman",
            shape: "dot",
        },
        { color: "#ff9896", id: "Akbar", label: "Akbar", shape: "dot" },
        { color: "#ff9896", id: "Fais", label: "Fais", shape: "dot" },
        { color: "#98df8a", id: "Umar", label: "Umar", shape: "dot" },
        { color: "#9467bd", id: "Adri", label: "Adri", shape: "dot" },
        {
            color: "#9467bd",
            id: "Azis Alfajar",
            label: "Azis Alfajar",
            shape: "dot",
        },
        { color: "#8c564b", id: "Tofan", label: "Tofan", shape: "dot" },
        { color: "#8c564b", id: "Surya", label: "Surya", shape: "dot" },
        { color: "#8c564b", id: "Nico", label: "Nico", shape: "dot" },
        { color: "#8c564b", id: "Jizdan", label: "Jizdan", shape: "dot" },
        { color: "#ff7f0e", id: "Bagas", label: "Bagas", shape: "dot" },
        { color: "#ff9896", id: "Dila", label: "Dila", shape: "dot" },
        { color: "#ff9896", id: "Ivada", label: "Ivada", shape: "dot" },
        { color: "#ff9896", id: "Riskina", label: "Riskina", shape: "dot" },
        { color: "#d62728", id: "Andi", label: "Andi", shape: "dot" },
        { color: "#d62728", id: "Aldy", label: "Aldy", shape: "dot" },
        { color: "#c5b0d5", id: "Windi", label: "Windi", shape: "dot" },
        { color: "#c5b0d5", id: "Putri", label: "Putri", shape: "dot" },
        { color: "#c5b0d5", id: "Febri", label: "Febri", shape: "dot" },
        { color: "#c5b0d5", id: "Natun", label: "Natun", shape: "dot" },
        {
            color: "#8c564b",
            id: "Ali Ridho",
            label: "Ali Ridho",
            shape: "dot",
        },
        { color: "#ff9896", id: "Rizky", label: "Rizky", shape: "dot" },
        { color: "#98df8a", id: "Fahmi", label: "Fahmi", shape: "dot" },
        { color: "#ffbb78", id: "Irfan", label: "Irfan", shape: "dot" },
        { color: "#ffbb78", id: "Rizka", label: "Rizka", shape: "dot" },
        { color: "#ffbb78", id: "Noval", label: "Noval", shape: "dot" },
        { color: "#d62728", id: "Niken", label: "Niken", shape: "dot" },
        { color: "#ffbb78", id: "Yusuf", label: "Yusuf", shape: "dot" },
        { color: "#ffbb78", id: "Ikbar", label: "Ikbar", shape: "dot" },
        { color: "#ffbb78", id: "Abid", label: "Abid", shape: "dot" },
        { color: "#98df8a", id: "Yunus", label: "Yunus", shape: "dot" },
        { color: "#98df8a", id: "Abdillah", label: "Abdillah", shape: "dot" },
        { color: "#98df8a", id: "Rifqi", label: "Rifqi", shape: "dot" },
        { color: "#1f77b4", id: "Vania", label: "Vania", shape: "dot" },
        { color: "#c49c94", id: "Melly", label: "Melly", shape: "dot" },
        { color: "#1f77b4", id: "Revika", label: "Revika", shape: "dot" },
        { color: "#1f77b4", id: "Devi", label: "Devi", shape: "dot" },
        { color: "#98df8a", id: "Satya", label: "Satya", shape: "dot" },
        { color: "#98df8a", id: "Farhan", label: "Farhan", shape: "dot" },
        { color: "#c49c94", id: "Fendi", label: "Fendi", shape: "dot" },
        { color: "#ffbb78", id: "Rere", label: "Rere", shape: "dot" },
        { color: "#aec7e8", id: "Farish", label: "Farish", shape: "dot" },
        { color: "#ff9896", id: "Yasmien", label: "Yasmien", shape: "dot" },
        { color: "#ff9896", id: "Zulfa", label: "Zulfa", shape: "dot" },
        { color: "#aec7e8", id: "Lydia", label: "Lydia", shape: "dot" },
        { color: "#aec7e8", id: "Arul", label: "Arul", shape: "dot" },
        { color: "#aec7e8", id: "Alifah", label: "Alifah", shape: "dot" },
        { color: "#1f77b4", id: "Tasya", label: "Tasya", shape: "dot" },
        {
            color: "#e377c2",
            id: "Wahyu Rohmatul",
            label: "Wahyu Rohmatul",
            shape: "dot",
        },
        { color: "#e377c2", id: "Aan", label: "Aan", shape: "dot" },
        { color: "#e377c2", id: "Holis", label: "Holis", shape: "dot" },
        {
            color: "#e377c2",
            id: "Lufthanza",
            label: "Lufthanza",
            shape: "dot",
        },
        { color: "#ffbb78", id: "Bima", label: "Bima", shape: "dot" },
        { color: "#ff9896", id: "Ilyas", label: "Ilyas", shape: "dot" },
        { color: "#2ca02c", id: "Febrianu", label: "Febrianu", shape: "dot" },
        { color: "#ff9896", id: "Winda", label: "Winda", shape: "dot" },
        { color: "#2ca02c", id: "Arifin", label: "Arifin", shape: "dot" },
        { color: "#2ca02c", id: "Andreas", label: "Andreas", shape: "dot" },
        { color: "#c5b0d5", id: "Balqis", label: "Balqis", shape: "dot" },
        { color: "#ff7f0e", id: "Nabhan", label: "Nabhan", shape: "dot" },
        { color: "#2ca02c", id: "Fedi", label: "Fedi", shape: "dot" },
        { color: "#2ca02c", id: "Nadhif", label: "Nadhif", shape: "dot" },
        { color: "#2ca02c", id: "Wildan", label: "Wildan", shape: "dot" },
        { color: "#98df8a", id: "Vemas", label: "Vemas", shape: "dot" },
        { color: "#ff9896", id: "Willy", label: "Willy", shape: "dot" },
        { color: "#aec7e8", id: "Yudha", label: "Yudha", shape: "dot" },
        { color: "#c49c94", id: "Auliya", label: "Auliya", shape: "dot" },
        { color: "#c49c94", id: "Febi", label: "Febi", shape: "dot" },
        { color: "#d62728", id: "Lia", label: "Lia", shape: "dot" },
        {
            color: "#98df8a",
            id: "Syaiful Ramadani",
            label: "Syaiful Ramadani",
            shape: "dot",
        },
        { color: "#2ca02c", id: "Rosyid", label: "Rosyid", shape: "dot" },
        { color: "#d62728", id: "Cici", label: "Cici", shape: "dot" },
        { color: "#d62728", id: "Ahya", label: "Ahya", shape: "dot" },
        { color: "#d62728", id: "Ami", label: "Ami", shape: "dot" },
        { color: "#c49c94", id: "Fentry", label: "Fentry", shape: "dot" },
        { color: "#c49c94", id: "Lisda", label: "Lisda", shape: "dot" },
        { color: "#c49c94", id: "Juan", label: "Juan", shape: "dot" },
        {
            color: "#aec7e8",
            id: "Oktaveian",
            label: "Oktaveian",
            shape: "dot",
        },
        { color: "#c49c94", id: "Zarkasyi", label: "Zarkasyi", shape: "dot" },
        { color: "#c49c94", id: "Samsul", label: "Samsul", shape: "dot" },
        { color: "#c49c94", id: "Bintang", label: "Bintang", shape: "dot" },
        { color: "#c5b0d5", id: "Helmia", label: "Helmia", shape: "dot" },
        { color: "#c5b0d5", id: "Vicky", label: "Vicky", shape: "dot" },
        { color: "#9467bd", id: "Billy", label: "Billy", shape: "dot" },
        { color: "#8c564b", id: "Shafy", label: "Shafy", shape: "dot" },
        { color: "#c49c94", id: "Elisa", label: "Elisa", shape: "dot" },
        { color: "#c49c94", id: "Khalisa", label: "Khalisa", shape: "dot" },
        { color: "#1f77b4", id: "Hamizan", label: "Hamizan", shape: "dot" },
        { color: "#d62728", id: "Nadiah", label: "Nadiah", shape: "dot" },
        { color: "#ffbb78", id: "Iqbil", label: "Iqbil", shape: "dot" },
        { color: "#ffbb78", id: "Yogi", label: "Yogi", shape: "dot" },
        { color: "#8c564b", id: "Ulum", label: "Ulum", shape: "dot" },
        { color: "#d62728", id: "Dina", label: "Dina", shape: "dot" },
        { color: "#d62728", id: "Rara", label: "Rara", shape: "dot" },
        { color: "#1f77b4", id: "Rissa", label: "Rissa", shape: "dot" },
        { color: "#1f77b4", id: "Ning", label: "Ning", shape: "dot" },
        { color: "#8c564b", id: "Fajar", label: "Fajar", shape: "dot" },
        {
            color: "#8c564b",
            id: "Fahmi Fahrizi",
            label: "Fahmi Fahrizi",
            shape: "dot",
        },
        { color: "#8c564b", id: "Danuarta", label: "Danuarta", shape: "dot" },
        { color: "#9467bd", id: "Abi", label: "Abi", shape: "dot" },
        { color: "#9467bd", id: "Erlangga", label: "Erlangga", shape: "dot" },
        { color: "#9467bd", id: "Valent", label: "Valent", shape: "dot" },
        { color: "#9467bd", id: "Desi", label: "Desi", shape: "dot" },
        { color: "#9467bd", id: "Olifia", label: "Olifia", shape: "dot" },
    ]);
    edges = new vis.DataSet([
        { arrows: "to", from: "Widiya", to: "Malik" },
        { arrows: "to", from: "Widiya", to: "Adi Sahrul" },
        { arrows: "to", from: "Widiya", to: "Ali" },
        { arrows: "to", from: "Zakaria", to: "Sabil" },
        { arrows: "to", from: "Zakaria", to: "Hanafi" },
        { arrows: "to", from: "Zakaria", to: "Faqih" },
        { arrows: "to", from: "Ilham", to: "Mahreza" },
        { arrows: "to", from: "Ilham", to: "Firmansyah" },
        { arrows: "to", from: "Ilham", to: "Hendra" },
        { arrows: "to", from: "Ronggo", to: "Akhyar" },
        { arrows: "to", from: "Ronggo", to: "Sabil" },
        { arrows: "to", from: "Ronggo", to: "Agus" },
        { arrows: "to", from: "Habiburrochman", to: "Anam" },
        { arrows: "to", from: "Habiburrochman", to: "Mishbahus" },
        { arrows: "to", from: "Habiburrochman", to: "Hendra" },
        { arrows: "to", from: "Wafda", to: "Faisal" },
        { arrows: "to", from: "Wafda", to: "Mishbahus" },
        { arrows: "to", from: "Wafda", to: "Hendra" },
        { arrows: "to", from: "Bagus", to: "Glendy" },
        { arrows: "to", from: "Bagus", to: "Andre Eka" },
        { arrows: "to", from: "Bagus", to: "Naufal" },
        { arrows: "to", from: "Hera", to: "Dimas" },
        { arrows: "to", from: "Agus", to: "Akhyar" },
        { arrows: "to", from: "Agus", to: "Ronggo" },
        { arrows: "to", from: "Agus", to: "Alivian" },
        { arrows: "to", from: "Agus", to: "Ariek" },
        { arrows: "to", from: "Akhyar", to: "Agus" },
        { arrows: "to", from: "Akhyar", to: "Ronggo" },
        { arrows: "to", from: "Akhyar", to: "Wahyu Cahyanto" },
        { arrows: "to", from: "Ramadani", to: "Evi" },
        { arrows: "to", from: "Ramadani", to: "Erwin" },
        { arrows: "to", from: "Ramadani", to: "Adi Prawono" },
        { arrows: "to", from: "Izzul", to: "Frederico" },
        { arrows: "to", from: "Izzul", to: "Yusron" },
        { arrows: "to", from: "Izzul", to: "Rafiq" },
        { arrows: "to", from: "Ramadika", to: "Anandya" },
        { arrows: "to", from: "Ramadika", to: "Hafidz" },
        { arrows: "to", from: "Reza", to: "Rizal" },
        { arrows: "to", from: "Reza", to: "Rosi" },
        { arrows: "to", from: "Reza", to: "Adi Rahman" },
        { arrows: "to", from: "Akbar", to: "Fais" },
        { arrows: "to", from: "Andre Eka", to: "Bagus" },
        { arrows: "to", from: "Andre Eka", to: "Glendy" },
        { arrows: "to", from: "Andre Eka", to: "Umar" },
        { arrows: "to", from: "Rosi", to: "Adi Rahman" },
        { arrows: "to", from: "Rosi", to: "Adri" },
        { arrows: "to", from: "Rosi", to: "Ramadani" },
        { arrows: "to", from: "Rosi", to: "Azis Alfajar" },
        { arrows: "to", from: "Rosi", to: "Rizal" },
        { arrows: "to", from: "Tofan", to: "Surya" },
        { arrows: "to", from: "Tofan", to: "Nico" },
        { arrows: "to", from: "Tofan", to: "Jizdan" },
        { arrows: "to", from: "Hendra", to: "Mishbahus" },
        { arrows: "to", from: "Hendra", to: "Bagas" },
        { arrows: "to", from: "Hendra", to: "Habiburrochman" },
        { arrows: "to", from: "Anam", to: "Habiburrochman" },
        { arrows: "to", from: "Anam", to: "Bagas" },
        { arrows: "to", from: "Anam", to: "Mishbahus" },
        { arrows: "to", from: "Dila", to: "Ivada" },
        { arrows: "to", from: "Dila", to: "Riskina" },
        { arrows: "to", from: "Andi", to: "Aldy" },
        { arrows: "to", from: "Andi", to: "Habiburrochman" },
        { arrows: "to", from: "Umar", to: "Bagus" },
        { arrows: "to", from: "Umar", to: "Glendy" },
        { arrows: "to", from: "Umar", to: "Andre Eka" },
        { arrows: "to", from: "Windi", to: "Putri" },
        { arrows: "to", from: "Windi", to: "Febri" },
        { arrows: "to", from: "Windi", to: "Natun" },
        { arrows: "to", from: "Glendy", to: "Bagus" },
        { arrows: "to", from: "Glendy", to: "Umar" },
        { arrows: "to", from: "Ariek", to: "Akhyar" },
        { arrows: "to", from: "Ariek", to: "Ronggo" },
        { arrows: "to", from: "Mahreza", to: "Mishbahus" },
        { arrows: "to", from: "Mahreza", to: "Bagas" },
        { arrows: "to", from: "Mahreza", to: "Ali Ridho" },
        { arrows: "to", from: "Rizky", to: "Andre Eka" },
        { arrows: "to", from: "Rizky", to: "Fahmi" },
        { arrows: "to", from: "Irfan", to: "Rizka" },
        { arrows: "to", from: "Irfan", to: "Noval" },
        { arrows: "to", from: "Niken", to: "Hera" },
        { arrows: "to", from: "Yusuf", to: "Akhyar" },
        { arrows: "to", from: "Yusuf", to: "Ikbar" },
        { arrows: "to", from: "Yusuf", to: "Abid" },
        { arrows: "to", from: "Ivada", to: "Dila" },
        { arrows: "to", from: "Ivada", to: "Adi Prawono" },
        { arrows: "to", from: "Yunus", to: "Abdillah" },
        { arrows: "to", from: "Yunus", to: "Rifqi" },
        { arrows: "to", from: "Yunus", to: "Fahmi" },
        { arrows: "to", from: "Sabil", to: "Ronggo" },
        { arrows: "to", from: "Sabil", to: "Firmansyah" },
        { arrows: "to", from: "Sabil", to: "Hanafi" },
        { arrows: "to", from: "Vania", to: "Melly" },
        { arrows: "to", from: "Vania", to: "Revika" },
        { arrows: "to", from: "Vania", to: "Devi" },
        { arrows: "to", from: "Satya", to: "Farhan" },
        { arrows: "to", from: "Satya", to: "Fendi" },
        { arrows: "to", from: "Putri", to: "Febri" },
        { arrows: "to", from: "Putri", to: "Natun" },
        { arrows: "to", from: "Putri", to: "Windi" },
        { arrows: "to", from: "Adi Prawono", to: "Akbar" },
        { arrows: "to", from: "Adi Prawono", to: "Fais" },
        { arrows: "to", from: "Ikbar", to: "Noval" },
        { arrows: "to", from: "Ikbar", to: "Rere" },
        { arrows: "to", from: "Faqih", to: "Wafda" },
        { arrows: "to", from: "Faqih", to: "Farish" },
        { arrows: "to", from: "Yasmien", to: "Zulfa" },
        { arrows: "to", from: "Yasmien", to: "Riskina" },
        { arrows: "to", from: "Lydia", to: "Arul" },
        { arrows: "to", from: "Lydia", to: "Alifah" },
        { arrows: "to", from: "Devi", to: "Agus" },
        { arrows: "to", from: "Devi", to: "Vania" },
        { arrows: "to", from: "Devi", to: "Revika" },
        { arrows: "to", from: "Tasya", to: "Widiya" },
        { arrows: "to", from: "Tasya", to: "Malik" },
        { arrows: "to", from: "Tasya", to: "Adi Sahrul" },
        { arrows: "to", from: "Wahyu Rohmatul", to: "Aan" },
        { arrows: "to", from: "Wahyu Rohmatul", to: "Holis" },
        { arrows: "to", from: "Wahyu Rohmatul", to: "Lufthanza" },
        { arrows: "to", from: "Bima", to: "Yusron" },
        { arrows: "to", from: "Bima", to: "Noval" },
        { arrows: "to", from: "Bima", to: "Ikbar" },
        { arrows: "to", from: "Ilyas", to: "Adi Prawono" },
        { arrows: "to", from: "Ilyas", to: "Fais" },
        { arrows: "to", from: "Ilyas", to: "Rizky" },
        { arrows: "to", from: "Alivian", to: "Agus" },
        { arrows: "to", from: "Alivian", to: "Febrianu" },
        { arrows: "to", from: "Winda", to: "Zulfa" },
        { arrows: "to", from: "Winda", to: "Riskina" },
        { arrows: "to", from: "Winda", to: "Dila" },
        { arrows: "to", from: "Arifin", to: "Andreas" },
        { arrows: "to", from: "Arifin", to: "Dimas" },
        { arrows: "to", from: "Balqis", to: "Putri" },
        { arrows: "to", from: "Balqis", to: "Febri" },
        { arrows: "to", from: "Balqis", to: "Windi" },
        { arrows: "to", from: "Nabhan", to: "Wahyu Cahyanto" },
        { arrows: "to", from: "Nabhan", to: "Mahreza" },
        { arrows: "to", from: "Nabhan", to: "Mishbahus" },
        { arrows: "to", from: "Yusron", to: "Izzul" },
        { arrows: "to", from: "Yusron", to: "Frederico" },
        { arrows: "to", from: "Yusron", to: "Rafiq" },
        { arrows: "to", from: "Fedi", to: "Agus" },
        { arrows: "to", from: "Fedi", to: "Nadhif" },
        { arrows: "to", from: "Fedi", to: "Wildan" },
        { arrows: "to", from: "Wahyu Cahyanto", to: "Akhyar" },
        { arrows: "to", from: "Wahyu Cahyanto", to: "Riskina" },
        { arrows: "to", from: "Wahyu Cahyanto", to: "Zulfa" },
        { arrows: "to", from: "Rifqi", to: "Vemas" },
        { arrows: "to", from: "Zulfa", to: "Riskina" },
        { arrows: "to", from: "Zulfa", to: "Winda" },
        { arrows: "to", from: "Zulfa", to: "Yasmien" },
        { arrows: "to", from: "Hanafi", to: "Willy" },
        { arrows: "to", from: "Hanafi", to: "Faqih" },
        { arrows: "to", from: "Hanafi", to: "Zakaria" },
        { arrows: "to", from: "Yudha", to: "Alifah" },
        { arrows: "to", from: "Yudha", to: "Zakaria" },
        { arrows: "to", from: "Yudha", to: "Willy" },
        { arrows: "to", from: "Auliya", to: "Febi" },
        { arrows: "to", from: "Auliya", to: "Lia" },
        { arrows: "to", from: "Auliya", to: "Zakaria" },
        { arrows: "to", from: "Abdillah", to: "Yunus" },
        { arrows: "to", from: "Abdillah", to: "Rifqi" },
        { arrows: "to", from: "Abdillah", to: "Syaiful Ramadani" },
        { arrows: "to", from: "Mishbahus", to: "Wafda" },
        { arrows: "to", from: "Mishbahus", to: "Hendra" },
        { arrows: "to", from: "Mishbahus", to: "Bagas" },
        { arrows: "to", from: "Lufthanza", to: "Akhyar" },
        { arrows: "to", from: "Lufthanza", to: "Aan" },
        { arrows: "to", from: "Rosyid", to: "Ariek" },
        { arrows: "to", from: "Rosyid", to: "Alivian" },
        { arrows: "to", from: "Aldy", to: "Niken" },
        { arrows: "to", from: "Aldy", to: "Cici" },
        { arrows: "to", from: "Natun", to: "Putri" },
        { arrows: "to", from: "Natun", to: "Febri" },
        { arrows: "to", from: "Natun", to: "Windi" },
        { arrows: "to", from: "Ahya", to: "Ami" },
        { arrows: "to", from: "Ahya", to: "Niken" },
        { arrows: "to", from: "Ahya", to: "Lia" },
        { arrows: "to", from: "Fentry", to: "Lisda" },
        { arrows: "to", from: "Fentry", to: "Auliya" },
        { arrows: "to", from: "Fentry", to: "Juan" },
        { arrows: "to", from: "Noval", to: "Zakaria" },
        { arrows: "to", from: "Noval", to: "Irfan" },
        { arrows: "to", from: "Oktaveian", to: "Zakaria" },
        { arrows: "to", from: "Oktaveian", to: "Sabil" },
        { arrows: "to", from: "Zarkasyi", to: "Samsul" },
        { arrows: "to", from: "Zarkasyi", to: "Bintang" },
        { arrows: "to", from: "Zarkasyi", to: "Faqih" },
        { arrows: "to", from: "Anandya", to: "Helmia" },
        { arrows: "to", from: "Anandya", to: "Vicky" },
        { arrows: "to", from: "Anandya", to: "Billy" },
        { arrows: "to", from: "Lia", to: "Balqis" },
        { arrows: "to", from: "Lia", to: "Ahya" },
        { arrows: "to", from: "Syaiful Ramadani", to: "Vemas" },
        { arrows: "to", from: "Syaiful Ramadani", to: "Rifqi" },
        { arrows: "to", from: "Syaiful Ramadani", to: "Abdillah" },
        { arrows: "to", from: "Syaiful Ramadani", to: "Fahmi" },
        { arrows: "to", from: "Syaiful Ramadani", to: "Zarkasyi" },
        { arrows: "to", from: "Syaiful Ramadani", to: "Farhan" },
        { arrows: "to", from: "Syaiful Ramadani", to: "Bagus" },
        { arrows: "to", from: "Syaiful Ramadani", to: "Umar" },
        { arrows: "to", from: "Ali Ridho", to: "Mahreza" },
        { arrows: "to", from: "Ali Ridho", to: "Shafy" },
        { arrows: "to", from: "Aan", to: "Wahyu Rohmatul" },
        { arrows: "to", from: "Aan", to: "Holis" },
        { arrows: "to", from: "Ami", to: "Ahya" },
        { arrows: "to", from: "Ami", to: "Niken" },
        { arrows: "to", from: "Elisa", to: "Febi" },
        { arrows: "to", from: "Elisa", to: "Khalisa" },
        { arrows: "to", from: "Melly", to: "Vania" },
        { arrows: "to", from: "Melly", to: "Juan" },
        { arrows: "to", from: "Melly", to: "Fentry" },
        { arrows: "to", from: "Juan", to: "Samsul" },
        { arrows: "to", from: "Juan", to: "Zarkasyi" },
        { arrows: "to", from: "Nico", to: "Tofan" },
        { arrows: "to", from: "Nico", to: "Surya" },
        { arrows: "to", from: "Rizka", to: "Irfan" },
        { arrows: "to", from: "Billy", to: "Anandya" },
        { arrows: "to", from: "Billy", to: "Adri" },
        { arrows: "to", from: "Hamizan", to: "Malik" },
        { arrows: "to", from: "Hamizan", to: "Adi Sahrul" },
        { arrows: "to", from: "Nadiah", to: "Cici" },
        { arrows: "to", from: "Nadiah", to: "Devi" },
        { arrows: "to", from: "Nadiah", to: "Adi Prawono" },
        { arrows: "to", from: "Febi", to: "Elisa" },
        { arrows: "to", from: "Febi", to: "Khalisa" },
        { arrows: "to", from: "Firmansyah", to: "Iqbil" },
        { arrows: "to", from: "Firmansyah", to: "Yogi" },
        { arrows: "to", from: "Ali", to: "Malik" },
        { arrows: "to", from: "Ali", to: "Adi Sahrul" },
        { arrows: "to", from: "Helmia", to: "Vicky" },
        { arrows: "to", from: "Helmia", to: "Anandya" },
        { arrows: "to", from: "Helmia", to: "Hafidz" },
        { arrows: "to", from: "Shafy", to: "Tofan" },
        { arrows: "to", from: "Shafy", to: "Nico" },
        { arrows: "to", from: "Shafy", to: "Ulum" },
        { arrows: "to", from: "Fais", to: "Adi Prawono" },
        { arrows: "to", from: "Fais", to: "Akbar" },
        { arrows: "to", from: "Ulum", to: "Surya" },
        { arrows: "to", from: "Cici", to: "Nadiah" },
        { arrows: "to", from: "Cici", to: "Agus" },
        { arrows: "to", from: "Fahmi", to: "Rizky" },
        { arrows: "to", from: "Fahmi", to: "Yunus" },
        { arrows: "to", from: "Fahmi", to: "Abdillah" },
        { arrows: "to", from: "Dimas", to: "Ariek" },
        { arrows: "to", from: "Dimas", to: "Ronggo" },
        { arrows: "to", from: "Andreas", to: "Arifin" },
        { arrows: "to", from: "Lisda", to: "Fentry" },
        { arrows: "to", from: "Lisda", to: "Auliya" },
        { arrows: "to", from: "Lisda", to: "Melly" },
        { arrows: "to", from: "Vemas", to: "Abdillah" },
        { arrows: "to", from: "Dina", to: "Hera" },
        { arrows: "to", from: "Dina", to: "Rara" },
        { arrows: "to", from: "Dina", to: "Anandya" },
        { arrows: "to", from: "Rere", to: "Noval" },
        { arrows: "to", from: "Rere", to: "Ikbar" },
        { arrows: "to", from: "Adri", to: "Rosi" },
        { arrows: "to", from: "Adri", to: "Ramadani" },
        { arrows: "to", from: "Rissa", to: "Widiya" },
        { arrows: "to", from: "Rissa", to: "Ning" },
        { arrows: "to", from: "Rissa", to: "Vania" },
        { arrows: "to", from: "Faisal", to: "Fais" },
        { arrows: "to", from: "Faisal", to: "Farish" },
        { arrows: "to", from: "Faisal", to: "Wafda" },
        { arrows: "to", from: "Samsul", to: "Juan" },
        { arrows: "to", from: "Samsul", to: "Bintang" },
        { arrows: "to", from: "Samsul", to: "Fendi" },
        { arrows: "to", from: "Iqbil", to: "Firmansyah" },
        { arrows: "to", from: "Iqbil", to: "Ikbar" },
        { arrows: "to", from: "Adi Sahrul", to: "Tasya" },
        { arrows: "to", from: "Adi Sahrul", to: "Malik" },
        { arrows: "to", from: "Adi Sahrul", to: "Ali" },
        { arrows: "to", from: "Malik", to: "Adi Sahrul" },
        { arrows: "to", from: "Malik", to: "Ali" },
        { arrows: "to", from: "Malik", to: "Tasya" },
        { arrows: "to", from: "Hafidz", to: "Febri" },
        { arrows: "to", from: "Hafidz", to: "Zarkasyi" },
        { arrows: "to", from: "Hafidz", to: "Windi" },
        { arrows: "to", from: "Jizdan", to: "Fajar" },
        { arrows: "to", from: "Jizdan", to: "Fahmi Fahrizi" },
        { arrows: "to", from: "Jizdan", to: "Danuarta" },
        { arrows: "to", from: "Nadhif", to: "Agus" },
        { arrows: "to", from: "Nadhif", to: "Alivian" },
        { arrows: "to", from: "Abi", to: "Erlangga" },
        { arrows: "to", from: "Abi", to: "Valent" },
        { arrows: "to", from: "Erlangga", to: "Desi" },
        { arrows: "to", from: "Erlangga", to: "Olifia" },
        { arrows: "to", from: "Desi", to: "Erlangga" },
        { arrows: "to", from: "Desi", to: "Olifia" },
        { arrows: "to", from: "Frederico", to: "Izzul" },
        { arrows: "to", from: "Frederico", to: "Yusron" },
        { arrows: "to", from: "Fendi", to: "Yudha" },
        { arrows: "to", from: "Fendi", to: "Juan" },
        { arrows: "to", from: "Fendi", to: "Bagus" },
        { arrows: "to", from: "Riskina", to: "Zulfa" },
        { arrows: "to", from: "Riskina", to: "Winda" },
        { arrows: "to", from: "Riskina", to: "Yasmien" },
        { arrows: "to", from: "Olifia", to: "Desi" },
        { arrows: "to", from: "Olifia", to: "Niken" },
        { arrows: "to", from: "Olifia", to: "Rosi" },
        { arrows: "to", from: "Willy", to: "Dila" },
        { arrows: "to", from: "Willy", to: "Hanafi" },
        { arrows: "to", from: "Willy", to: "Fais" },
    ]);
    nodeColors = {};
    allNodes = nodes.get({ returnType: "Object" });
    for (nodeId in allNodes) {
        nodeColors[nodeId] = allNodes[nodeId].color;
    }
    allEdges = edges.get({ returnType: "Object" });
    // adding nodes and edges to the graph
    data = { nodes: nodes, edges: edges };

    var options = {
        interaction: { navigationButtons: true, keyboard: true },
        physics: { enabled: true },
    };
    network = new vis.Network(container, data, options);
    network.on("stabilizationProgress", function (params) {
        document.getElementById("loadingBar").removeAttribute("style");
        var maxWidth = 496;
        var minWidth = 20;
        var widthFactor = params.iterations / params.total;
        var width = Math.max(minWidth, maxWidth * widthFactor);
        document.getElementById("bar").style.width = width + "px";
        document.getElementById("text").innerHTML =
            Math.round(widthFactor * 100) + "%";
    });
    network.once("stabilizationIterationsDone", function () {
        document.getElementById("text").innerHTML = "100%";
        document.getElementById("bar").style.width = "496px";
        document.getElementById("loadingBar").style.opacity = 0;
        style =
            "padding: 10px; background: #fff; border: 1px solid #ccc; border-radius: 4px; position: absolute; top: 60px; left: 15px; z-index: 9999;" >
            // really clean the dom element
            setTimeout(function () {
                document.getElementById("loadingBar").style.display = "none";
            }, 500);
        const legendContainer = document.getElementById("legend");

        legendContainer.style.padding = "10px";
        legendContainer.style.background = "#fff";
        legendContainer.style.border = "1px solid #ccc";
        legendContainer.style.borderRadius = "4px";
        legendContainer.style.position = "absolute";
        legendContainer.style.top = "80px";
        legendContainer.style.left = "15px";
        legendContainer.style.zIndex = "9999";

        const heading = document.createElement("h3");
        heading.textContent = "List Sirkel";
        legendContainer.appendChild(heading);

        const colors = [
            "#1f77b4",
            "#aec7e8",
            "#ff7f0e",
            "#ffbb78",
            "#2ca02c",
            "#98df8a",
            "#d62728",
            "#ff9896",
            "#9467bd",
            "#c5b0d5",
            "#8c564b",
            "#c49c94",
            "#e377c2",
        ];

        const communities = Array.from({ length: 12 }, (_, i) => i + 1);
        communities.forEach((community, index) => {
            if (index < colors.length) {
                const legendItem = document.createElement("div");
                legendItem.className = "legend-item";

                const colorBox = document.createElement("div");
                colorBox.className = "legend-color";
                colorBox.style.background = colors[index];

                const label = document.createElement("div");
                label.textContent = `Sirkel ${community}`;

                legendItem.appendChild(colorBox);
                legendItem.appendChild(label);
                legendContainer.appendChild(legendItem);
            }
        });
    });
    return network;
}
drawGraph();
