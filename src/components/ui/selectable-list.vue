<template>
  <ul class="list selectable" :class="extraclass">
    <slot></slot>
  </ul>
</template>

<script>
module.exports = {
  props: ['extraclass'],
};
</script>

<style lang="scss">
@import "~assets/materialize.scss";

.list {
  @extend .collection;
  display: table;
  width: 100%;

  border-style: none;
  background-size: 100% 98px;
  background-image: linear-gradient(#ececec 49px, #eaeaea 49px);
  box-shadow: 0 0 2px rgba(0,0,0,0.12), 0 2px 4px rgba(0,0,0,0.24);

  li {
    @extend .collection-item;
    font-size: 14px;
    display: table-row;
    //border-bottom: 1px solid #d0d0d0;

    background-color: $white;
    border-bottom-style: solid;
    border-bottom-color: #ececec;
    border-bottom-width: 1px;
    cursor: pointer;

    &.selected {
      background-color: #e1f5fe;
    }

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
      div:first-child {
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
