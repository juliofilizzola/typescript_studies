var MyNamespace;
(function (MyNamespace) {
    MyNamespace.name = 'Julio';
    var PersonNamespace = /** @class */ (function () {
        function PersonNamespace(name) {
            this.name = name;
        }
        return PersonNamespace;
    }());
    MyNamespace.PersonNamespace = PersonNamespace;
    var personNamespace = new PersonNamespace(MyNamespace.name);
    console.log(personNamespace);
    var OutroNamespace;
    (function (OutroNamespace) {
        OutroNamespace.nameDoNamespace = 'outro nameespace';
    })(OutroNamespace = MyNamespace.OutroNamespace || (MyNamespace.OutroNamespace = {}));
})(MyNamespace || (MyNamespace = {}));
var namespace = new MyNamespace.PersonNamespace('xalau');
console.log(MyNamespace.name);
console.log(MyNamespace.OutroNamespace.nameDoNamespace);
console.log(namespace);
// como exportar namespace
/// <reference path="Namespace.ts"/>
console.log(MyNamespace.OutroNamespace.nameDoNamespace, 'xablau');
