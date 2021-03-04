<script>
export default {
    methods: {
        $can(permissionName) {
            if (this.$page.props.auth.role === 'admin') return true;

            return this.$page.props.permissions.indexOf(permissionName) !== -1;
        },
    },
};
</script>
