<template>
  <nav class="appbar row" role="navigation">
    <div class="navbar-header col s2">
      <a class="button-collapse" data-activates="module-selector" title="Módulos disponibles" rel="tooltip">
        <icon name="menu"></icon>
        <span class="module-title">Module Title</span>
      </a>
      <a class="action-back">
        <icon name="arrow_back"></icon>
        <span class="action-back-label">Atrás</span>
      </a>
    </div>
    <div class="navbar col s10">
      <div class="searchbox col s9">
        <div class="search-icon"><icon name="search"></icon></div>
        <div class="search-input">
          <input id="search" type="search" placeholder="Buscar">
        </div>
      </div>
      <div class="toolbox col s3">
        <a class="icon-toggle"><icon name="alarm"></icon></a>
        <a class="icon-toggle disabled"><icon name="refresh"></icon></a>
        <a class="icon-toggle"><icon name="more_vert"></icon></a>
      </div>
    </div>
  </nav>
</template>

<script>
module.exports = {
  components: {
    'icon': require('./ui/icon'),
  },
};
</script>

<style lang="scss">
@import "../assets/style";
@import "~materialize-css/sass/components/navbar";

$appbar-height: 56px;
$appbar-line-height: 26px;

nav.appbar {
  position: fixed;
  height: $appbar-height;
  margin-bottom: 0;
  line-height: $appbar-line-height;

  a.button-collapse,
  a.action-back {
    display: inline-block;
    height: $appbar-height;
    padding: 15px 0;
    line-height: normal;

    i, .module-title, .action-back-label {
      display: inline;
      height: $appbar-line-height;
      line-height: $appbar-line-height;
      vertical-align: middle;
    }

    i {
      font-size: 1.6rem;
      &:first-child { padding-right: 15px; }
    }

    .module-title,
    .action-back-label {
      font-size: 20px;
    }
  }

  .searchbox, .toolbox {
    height: 36px;
    margin-top: 10px;
    line-height: 36px;

    .material-icons {
      display: inline-block;
      height: 1em;
    }
  }

  .searchbox {
    padding: 0;
  }

  .toolbox {
    display: flex;
    justify-content: flex-end;
  }
}
</style>
