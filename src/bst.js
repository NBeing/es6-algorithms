class Node{
    constructor( val, left, right ){
        this.value = val;
        this.left  = left  || null;
        this.right = right || null;
    }
    get value(){ return this._value; }
    set value( newValue ) { this._value = newValue; }

    set left ( leaf ){ this._left  = leaf; }
    set right( leaf ){ this._right = leaf; }

    get left ( ){ return this._left;  }
    get right( ){ return this._right; }
}
class BST {
    constructor( root ){
        this.root = root;
    }
    setOrInsertLeaf( root, node, direction ){
        ( root[direction] == null)
            ? root[direction] = node
            : this.insert(root[direction], node);
    }
    insert( root , node ){
        // If the root value is less than
        this.setOrInsertLeaf( root, node, ( root.value < node.value) ? 'right' : 'left');
    }
    minValueNode(node){
        let current = node;
        while(current.left !== null){
            current = current.left;
        }
        return current;
    }
    deleteNode( root, key ){
        // If there root doesn't exist, then just return null bc thats the tree
        if( root === null ) return root;

        // If the value is not equal (i.e. > || < ) then we need to move to a lower level
        // This will determine whether we should go left or right, i.e. root will become that node
        // The left/right will also become the result of the deletion
        if( key < root.value){ root.left = this.deleteNode( root.left  , key ) ; }

        else if( key > root.value){ root.right = this.deleteNode(root.right, key);}

        // If the value is equal then we stop traversing
        else {
            // If Node has only one or no child,
            // Then we just move that one up to the position of the node we are deleting
            // Recall that earlier we set root.left/root.right to be the result of this function
            // So, if we return the temp (i.e. the nodes (with leaves)), then those will be rejoined
            // To the table via that function call
            if(root.left === null ){
                let temp = root.right;
                root = null;
                return temp;
            } else if ( root.right === null){
                let temp = root.left;
                root = null;
                return temp;
            }
            // This next block code fires when there are two children
            // Essentially we want to find the node with the minimum value
            // and replace the delete node with that node

            // Find the minimum value (it should exist in the right subtree)
            let local_minimum = this.minValueNode(root.right);
            // Replace the root with that value
            root.value = local_minimum.value;
            // Set the right value to be the resulting subtree after deleting the minimum value
            root.right = this.deleteNode(root.right, local_minimum.value);
        }
        return root;
    }
    search( root , key ){
        if( root.value == null || root.value == key) return root;
        if( root.value < key ) return this.search(root.right, key);
        return this.search(root.left, key);
    }
    getHeight( root ){
        return ( root == null || root.value == null )
                 ? 0
                 : ( this.getHeight(root.left) > this.getHeight(root.right))
                   ? ( this.getHeight( root.left  ) + 1 )
                   : ( this.getHeight( root.right ) + 1 ) ;
    }
}
module.exports = { BST , Node};
