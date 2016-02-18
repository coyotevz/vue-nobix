<template>
<div class="iconimg">
  <img class="avatar-circle" :src="image_path">
  <input :id="id" type="checkbox" class="filled-id"/>
  <label :for="id"></label>
</div>
</template>

<script>
module.exports = {
  props: {
    'image': {
      type: String,
      required: true,
    },
    'id': {
      type: String,
      required: true,
    },
  },
  computed: {
    image_path: function() {
      return require('../../assets/image/'+this.image);
    },
  },
};
</script>
