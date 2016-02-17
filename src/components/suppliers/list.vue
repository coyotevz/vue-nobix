<template>
  <ul class="list suppliers-list selectable">
    <li class="list-item" v-for="supplier in suppliers">
      <div class="iconimg">
        <img class="avatar-circle" src="~assets/image/photo.jpg">
        <input id="supplier_item_{{ supplier.id }}" type="checkbox" class="filled-in"/>
        <label for="supplier_item_{{ supplier.id }}"></label>
      </div>
      <div class="name"><a href="#suppliers/{{ supplier.id }}">{{ supplier.name }}</a></div>
      <div class="col3"></div>
      <div class="col4"></div>
      <div class="actions"></div>
    </li>
  </ul>
</template>

<script>
module.exports = {
  data: function() {
    return {
      suppliers: [
        { id: 1, name: 'Supplier 1' },
        { id: 2, name: 'Supplier 2' },
        { id: 3, name: 'Supplier 3' },
        { id: 4, name: 'Supplier 4' },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "~assets/materialize.scss";

.list {
  @extend .collection;
  display: table;
  width: 100%;

  li {
    @extend .collection-item;
    font-size: 14px;
    display: table-row;
    border-bottom: 1px solid #d0d0d0;

    div {
      @extend .truncate;
      display: table-cell;
      padding-right: 20px;
      line-height: 48px;
      border-bottom: 1px solid #ececec;
      border-left: 2px solid transparent;
      position: relative;
    }

    .iconimg {
      padding-left: 24px;
      width: 72px;

      .avatar-circle {
        border-radius: 50%;
        height: 28px;
        width: 28px;
        position: absolute;
        left: 20px;
        top: 10px;
        z-index: 2;
      }
    }

    .description,
    .name {
      width: 20%;
      padding-right: 15px;
      a {
        color: #444;
        font-weight: bold;
        &:hover { text-decoration: underline; }
      }
    }
    .col3 { width: 25%; }
    .col4 { width: 22%; }
    .actions { width: 33% }

    &:last-child {
      div { border-bottom: none; }
    }

    [type="checkbox"] + label {
      display: inline;
      line-height: 48px;
      padding-left: 20px;
    }

    .filled-in[type="checkbox"] {
      &,
      &:checked {
        + label:before,
        + label:after {
          transition-property: none;
        }
      }

      &:checked {
        + label:before {
          top: 1px;
        }
        +label:after {
          background-color: #5a5a5a;
          border-color: #5a5a5a;
        }
      }
    }

    &:active,
    &.active {
      dif:first-child {
        border-left: 2px solid #427fed;
      }
    }
  }

  &.selection,
  &.selectable li:hover {
    .avatar-circle {
      display: none;
    }
  }
}
</style>
