@annotation
class MyClass {}

function annotation(target) {
    console.log(`decorator loade`);
    target.annotated = true;
}