<script>
  export let index;
  export let changeDone;
  export let task;

  // Todo
  let status = task.done ? "done" : "todo";
</script>

<input id={index} type="checkbox" on:change={() => changeDone(index)} />
<label class={status} for={index}>{task.text}</label>

<style>
  .done {
    text-decoration: line-through;
  }
</style>
